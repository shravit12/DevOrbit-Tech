/** @type {import('next-sitemap').IConfig} */

const BASE_URL =
  process.env.SITE_URL || "http://localhost:3000";

module.exports = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,

  additionalPaths: async () => {
    const result = [];

    try {
      const res = await fetch(`${BASE_URL}/api/news_fetch`);
      const data = await res.json();

      data.forEach((item) => {
        result.push({
          loc: `/news/${item.id}`, // ya item.slug
          changefreq: "daily",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      });

    } catch (error) {
      console.error("❌ Sitemap fetch error:", error);
    }

    return result;
  },
};