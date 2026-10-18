const Parser = require("rss-parser");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// ✅ Custom fields + User-Agent so Google News doesn't block requests
const parser = new Parser({
  timeout: 10000,
  customFields: {
    item: ["source", "description"],
  },
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

// 📁 File paths
const DATA_DIR = path.join(__dirname, "../../data");
const DATA_FILE = path.join(DATA_DIR, "news.json");
const FINAL_DATA_FILE = path.join(DATA_DIR, "final-data.json");

// 📰 RSS Feeds
const FEEDS = [
  { url: "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en", category: "General" },
  { url: "https://news.google.com/rss/headlines/section/topic/NATION?hl=en-IN&gl=IN&ceid=IN:en", category: "India" },
  { url: "https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-IN&gl=IN&ceid=IN:en", category: "World" },
  { url: "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-IN&gl=IN&ceid=IN:en", category: "Tech" },
  { url: "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-IN&gl=IN&ceid=IN:en", category: "Business" },
  { url: "https://news.google.com/rss/headlines/section/topic/SPORTS?hl=en-IN&gl=IN&ceid=IN:en", category: "Sports" },
  { url: "https://news.google.com/rss/headlines/section/topic/ENTERTAINMENT?hl=en-IN&gl=IN&ceid=IN:en", category: "Entertainment" },
  { url: "https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=en-IN&gl=IN&ceid=IN:en", category: "Science" },
  { url: "https://news.google.com/rss/headlines/section/topic/HEALTH?hl=en-IN&gl=IN&ceid=IN:en", category: "Health" },
  { url: "https://news.google.com/rss/search?q=Environment+India&hl=en-IN&gl=IN&ceid=IN:en", category: "Environment" },
];

// 🔥 SLUG GENERATOR (Capped at 85 chars for clean URLs)
function slugify(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 85)
    .replace(/-$/, "");
}

// 🔥 UNIQUE SLUG HANDLER
function generateUniqueSlug(title, existingSlugs) {
  const baseSlug = slugify(title) || "news";
  let slug = baseSlug;
  let counter = 1;

  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${counter++}`;
  }

  existingSlugs.add(slug);
  return slug;
}

// 🧹 CLEAN TITLE & EXTRACT SOURCE
function parseTitleAndSource(item) {
  const rawTitle = (item.title || "").trim();
  let source =
    typeof item.source === "string"
      ? item.source
      : item.source?._ || item.source?.["$"]?.url || "";

  let cleanTitle = rawTitle;

  // Google News titles end with " - Publisher Name"
  const lastDashIndex = rawTitle.lastIndexOf(" - ");
  if (lastDashIndex !== -1) {
    const trailingSource = rawTitle.slice(lastDashIndex + 3).trim();
    cleanTitle = rawTitle.slice(0, lastDashIndex).trim();
    if (!source) source = trailingSource;
  }

  return {
    cleanTitle: cleanTitle || rawTitle,
    source: source || "Google News",
  };
}

// 🧹 EXTRACT RELATED COVERAGE FROM GOOGLE NEWS HTML DESCRIPTION
function parseDescriptionAndContent(item, cleanTitle, source, category) {
  const rawHtml = item.description || item.content || "";

  // Extract related headlines inside Google News's <li><a> tags
  const relatedHeadlines = [];
  const liRegex = /<a[^>]*>(.*?)<\/a>.*?<font[^>]*>(.*?)<\/font>/gi;
  let match;

  while ((match = liRegex.exec(rawHtml)) !== null) {
    const headline = match[1].replace(/<[^>]+>/g, "").trim();
    const pub = match[2].replace(/<[^>]+>/g, "").trim();
    if (headline && headline !== cleanTitle) {
      relatedHeadlines.push(`• ${headline} (${pub})`);
    }
  }

  const plainSnippet = (item.contentSnippet || cleanTitle)
    .replace(/\s+/g, " ")
    .trim();

  // Short description for cards & SEO meta description
  const shortDesc =
    plainSnippet.length > 20 && plainSnippet !== cleanTitle
      ? plainSnippet
      : `${cleanTitle} — Latest ${category} update reported by ${source}.`;

  // Multi-paragraph content for final-data.json
  const paragraphs = [
    `${cleanTitle}. This developing ${category.toLowerCase()} story was originally reported by ${source}.`,
  ];

  if (relatedHeadlines.length > 0) {
    paragraphs.push(
      `Related Coverage & Key Developments:\n${relatedHeadlines.join("\n")}`
    );
  } else if (plainSnippet && plainSnippet !== cleanTitle) {
    paragraphs.push(plainSnippet);
  }

  paragraphs.push(
    `For complete details and live updates, visit the original report published by ${source}.`
  );

  return {
    desc: shortDesc,
    fullContent: paragraphs.join("\n\n"),
  };
}

// 🕒 FORMAT TIME (IST)
function formatExactTime(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}

// ✅ RELIABLE CHECK FOR TODAY (IST)
const istFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function isTodayIST(dateString) {
  if (!dateString) return false;
  const itemDate = new Date(dateString);
  if (isNaN(itemDate.getTime())) return false;

  return istFormatter.format(itemDate) === istFormatter.format(new Date());
}

// 🛡️ SAFE JSON LOADER
function loadJsonSafe(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
    return [];
  }
  try {
    const raw = fs.readFileSync(filePath, "utf-8").trim();
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn(`⚠️ Corrupted JSON in ${path.basename(filePath)}, resetting...`);
    return [];
  }
}

(async () => {
  const startTime = Date.now();

  // ✅ 1. Ensure data folder exists
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // ✅ 2. Load existing data & keep only today's news (IST)
  const existingNews = loadJsonSafe(DATA_FILE).filter((item) =>
    isTodayIST(item.date)
  );
  const existingFinalData = loadJsonSafe(FINAL_DATA_FILE);

  // 🔒 Track existing links, slugs, and titles to prevent duplicates across categories
  const seenLinks = new Set(existingNews.map((n) => n.link));
  const existingSlugs = new Set(existingNews.map((n) => n.slug));
  const seenTitles = new Set(
    existingNews.map((n) => slugify(n.title))
  );

  const newNews = [];
  const newFinalArticles = [];

  // ⚡ 3. Fetch all RSS feeds in parallel for 5x faster execution
  const results = await Promise.allSettled(
    FEEDS.map(async (feedInfo) => {
      const feed = await parser.parseURL(feedInfo.url);
      return { feedInfo, items: feed.items || [] };
    })
  );

  // 🔄 4. Process fetched items
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const category = FEEDS[i].category;

    if (result.status === "rejected") {
      console.log(`❌ Error fetching [${category}]: ${result.reason?.message}`);
      continue;
    }

    const { items } = result.value;
    let addedForCategory = 0;

    for (const item of items) {
      const pubDate = item.isoDate || item.pubDate;
      if (!item.link || seenLinks.has(item.link) || !isTodayIST(pubDate)) {
        continue;
      }

      const { cleanTitle, source } = parseTitleAndSource(item);
      const titleKey = slugify(cleanTitle);

      // Skip if exact same headline already exists in another category
      if (!titleKey || seenTitles.has(titleKey)) {
        continue;
      }

      const id = crypto.randomUUID();
      const slug = generateUniqueSlug(cleanTitle, existingSlugs);
      const { desc, fullContent } = parseDescriptionAndContent(
        item,
        cleanTitle,
        source,
        category
      );

      newNews.push({
        id,
        slug,
        title: cleanTitle,
        desc,
        source,
        date: new Date(pubDate).toISOString(),
        time: formatExactTime(pubDate),
        link: item.link,
        category,
      });

      newFinalArticles.push({
        id,
        slug,
        title: cleanTitle,
        content: fullContent,
      });

      seenLinks.add(item.link);
      seenTitles.add(titleKey);
      addedForCategory++;
    }

    console.log(`✔️ Fetched ${category.padEnd(14)} (+${addedForCategory} new)`);
  }

  // 📦 5. Merge & Sort news.json (Latest First)
  const updatedNews = [...existingNews, ...newNews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // 🔄 6. Sync final-data.json (Keep existing matching articles + append new ones)
  const activeIds = new Set(updatedNews.map((n) => String(n.id)));
  const cleanedFinalData = existingFinalData.filter((a) =>
    activeIds.has(String(a.id))
  );
  const finalIds = new Set(cleanedFinalData.map((a) => String(a.id)));

  // Backfill any items in news.json that were missing from final-data.json
  for (const newsItem of updatedNews) {
    if (!finalIds.has(String(newsItem.id))) {
      const newlyCreated = newFinalArticles.find((a) => a.id === newsItem.id);
      cleanedFinalData.push(
        newlyCreated || {
          id: newsItem.id,
          slug: newsItem.slug,
          title: newsItem.title,
          content: `${newsItem.desc}\n\nReported by ${newsItem.source}.`,
        }
      );
      finalIds.add(String(newsItem.id));
    }
  }

  // 💾 7. Save both files
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedNews, null, 2), "utf-8");
  fs.writeFileSync(
    FINAL_DATA_FILE,
    JSON.stringify(cleanedFinalData, null, 2),
    "utf-8"
  );

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Added ${newNews.length} new news in ${elapsed}s`);
  console.log(`📊 Total active news (Today IST): ${updatedNews.length}`);
  console.log(`📄 Synced final-data.json: ${cleanedFinalData.length} full articles`);
})();