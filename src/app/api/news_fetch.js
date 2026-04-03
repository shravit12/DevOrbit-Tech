const Parser = require("rss-parser");
const fs = require("fs");
const path = require("path");

const parser = new Parser();

// 📁 file path
const DATA_FILE = path.join(__dirname, "../../data/news.json");

// 📰 RSS feeds
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

  // 🧹 🔥 REMOVE NEWS OLDER THAN TODAY 8:00 AM
  const today8AM = new Date();
  today8AM.setHours(8, 0, 0, 0);

  existingNews = existingNews.filter(item => {
    if (!item.date) return false;
    const newsDate = new Date(item.date);
    return newsDate >= today8AM;
  });

  const seen = new Set(existingNews.map(n => n.link));
  let idCounter = existingNews.length + 1;
  const newNews = [];

  // 🔄 Fetch RSS
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

            // 🔥 IMPORTANT: store full date + formatted time
            date: item.isoDate,
            time: formatExactTime(item.isoDate),

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

  // 📦 Merge
  const updatedNews = existingNews.concat(newNews);

  // 💾 Save
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedNews, null, 2));

  console.log(`✅ Added ${newNews.length} new news`);
  console.log(`📊 Total news: ${updatedNews.length}`);
})();

// 🕒 FORMAT TIME (ONLY TIME)
function formatExactTime(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}