const Parser = require("rss-parser");
const fs = require("fs");
const path = require("path");

const parser = new Parser();

// 📁 file path
const DATA_FILE = path.join(__dirname, "../../data/news.json");

// 📰 Multiple RSS feeds
const FEEDS = [
  {
    url: "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en",
    category: "General"
  },
  {
    url: "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-IN&gl=IN&ceid=IN:en",
    category: "Tech"
  },
  {
    url: "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-IN&gl=IN&ceid=IN:en",
    category: "Business"
  },
  {
    url: "https://news.google.com/rss/headlines/section/topic/SPORTS?hl=en-IN&gl=IN&ceid=IN:en",
    category: "Sports"
  }
];

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

  const seen = new Set(existingNews.map(n => n.link));
  let idCounter = existingNews.length + 1;
  const newNews = [];

  // 🔄 Loop through all feeds
  for (const feedInfo of FEEDS) {
    try {
      const feed = await parser.parseURL(feedInfo.url);

      feed.items.forEach(item => {
        if (!seen.has(item.link)) {
          newNews.push({
            id: (idCounter++).toString(),
            title: item.title,
            desc: item.contentSnippet || item.content || item.title,
            source: item.source || "Google News",
            date: item.isoDate || new Date().toISOString(),
            link: item.link,
            category: feedInfo.category
          });

          seen.add(item.link);
        }
      });

    } catch (err) {
      console.log(`❌ Error fetching feed: ${feedInfo.url}`);
    }
  }

  // 📦 Merge old + new
  const updatedNews = existingNews.concat(newNews);

  // 💾 Save
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedNews, null, 2));

  console.log(`✅ Added ${newNews.length} new news`);
  console.log(`📊 Total news: ${updatedNews.length}`);
})();