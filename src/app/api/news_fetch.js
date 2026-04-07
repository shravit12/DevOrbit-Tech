const Parser = require("rss-parser");
const fs = require("fs");
const path = require("path");

const parser = new Parser();

// 📁 file path
const DATA_FILE = path.join(__dirname, "../../data/news.json");

// 📰 RSS feeds
const FEEDS = [
  { url: "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en", category: "General" },
  { url: "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-IN&gl=IN&ceid=IN:en", category: "Tech" },
  { url: "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-IN&gl=IN&ceid=IN:en", category: "Business" },
  { url: "https://news.google.com/rss/headlines/section/topic/SPORTS?hl=en-IN&gl=IN&ceid=IN:en", category: "Sports" },
  { url: "https://news.google.com/rss/headlines/section/topic/ENTERTAINMENT?hl=en-IN&gl=IN&ceid=IN:en", category: "Entertainment" },
  { url: "https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=en-IN&gl=IN&ceid=IN:en", category: "Science" },
  { url: "https://news.google.com/rss/headlines/section/topic/HEALTH?hl=en-IN&gl=IN&ceid=IN:en", category: "Health" },
  { url: "https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-IN&gl=IN&ceid=IN:en", category: "World" },
  { url: "https://news.google.com/rss/headlines/section/topic/INDIA?hl=en-IN&gl=IN&ceid=IN:en", category: "India" },
  { url: "https://news.google.com/rss/headlines/section/topic/ENVIRONMENT?hl=en-IN&gl=IN&ceid=IN:en", category: "Environment" }
];

// 🔥 SLUG GENERATOR
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// 🔥 UNIQUE SLUG HANDLER
function generateUniqueSlug(title, existingSlugs) {
  let baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;

  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${counter++}`;
  }

  existingSlugs.add(slug);
  return slug;
}

// 🕒 FORMAT TIME (IST)
function formatExactTime(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
  });
}

// ✅ CHECK TODAY (IST)
function isTodayIST(dateString) {
  if (!dateString) return false;

  const newsDate = new Date(dateString);

  const istDate = new Date(
    newsDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const nowIST = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  return (
    istDate.getDate() === nowIST.getDate() &&
    istDate.getMonth() === nowIST.getMonth() &&
    istDate.getFullYear() === nowIST.getFullYear()
  );
}

(async () => {
  let existingNews = [];

  // ✅ SAFE LOAD JSON
  if (fs.existsSync(DATA_FILE)) {
    const fileContent = fs.readFileSync(DATA_FILE, "utf-8").trim();

    if (fileContent) {
      try {
        existingNews = JSON.parse(fileContent);
      } catch (err) {
        console.log("⚠️ JSON corrupted, resetting file...");
        existingNews = [];
      }
    }
  } else {
    fs.writeFileSync(DATA_FILE, "[]");
  }

  // 🧹 REMOVE OLD NEWS (ONLY TODAY IST)
  existingNews = existingNews.filter(item => isTodayIST(item.date));

  // 🔒 TRACK EXISTING LINKS + SLUGS
  const seenLinks = new Set(existingNews.map(n => n.link));
  const existingSlugs = new Set(existingNews.map(n => n.slug));

  const newNews = [];

  // 🔄 FETCH RSS
  for (const feedInfo of FEEDS) {
    try {
      const feed = await parser.parseURL(feedInfo.url);

      feed.items.forEach(item => {
        if (
          !seenLinks.has(item.link) &&
          isTodayIST(item.isoDate) // ✅ FILTER NEW NEWS ALSO
        ) {
          const slug = generateUniqueSlug(item.title, existingSlugs);

          newNews.push({
            id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            slug: slug,
            title: item.title,
            desc: item.contentSnippet || item.content || item.title,
            source: item.source || "Google News",
            date: item.isoDate,
            time: formatExactTime(item.isoDate),
            link: item.link,
            category: feedInfo.category
          });

          seenLinks.add(item.link);
        }
      });
    } catch (err) {
      console.log(`❌ Error fetching feed: ${feedInfo.url}`);
    }
  }

  // 📦 MERGE
  const updatedNews = existingNews.concat(newNews);

  // 🔽 SORT LATEST FIRST
  updatedNews.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 💾 SAVE
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedNews, null, 2));

  console.log(`✅ Added ${newNews.length} new news`);
  console.log(`📊 Total news: ${updatedNews.length}`);
})();