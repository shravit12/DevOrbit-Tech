const fs = require("fs");
const Parser = require("rss-parser");
const path = require("path");
const parser = new Parser();

async function fetchNews() {
  try {
    const feed = await parser.parseURL("https://news.google.com/rss");
const dir = path.join(process.cwd(), "data");
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const filePath = path.join(dir, "news.js");
fs.writeFileSync(filePath, fileContent);
    const now = new Date();

    const news = feed.items
      .filter((item) => {
        const newsDate = new Date(item.pubDate);

        // 🔥 last 6 hours
        const diff = (now - newsDate) / (1000 * 60 * 60);

        return diff <= 6;
      })
      .slice(0, 90)
      .map((item, index) => ({
        id: (index + 1).toString(),
        category: getCategory(item.title),
        title: item.title || "No Title",

        // 🔥 BEST DESCRIPTION (long + clean)
        desc: (item.contentSnippet || item.content || "No description")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 1900) + "...",

        date: formatDate(item.pubDate),
      }));

    const fileContent = `const newsData = ${JSON.stringify(news, null, 2)};\n\nexport default newsData;`;

   fs.writeFileSync(filePath, fileContent);

    console.log("✅ Clean long description news saved");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

// category logic
function getCategory(title = "") {
  title = title.toLowerCase();

  if (title.includes("ai")) return "AI";
  if (title.includes("tech")) return "Tech";
  if (title.includes("business")) return "Business";
  if (title.includes("crypto")) return "Crypto";

  return "General";
}

// date format
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

fetchNews();
