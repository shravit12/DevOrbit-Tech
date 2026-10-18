import newsData from "@/data/news.json";
import finaldata from "@/data/final-data.json";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollTop";

// ✅ Force dynamic rendering if news.json updates frequently
export const dynamic = "force-dynamic";

// 🗓️ Format ISO date into readable IST Date (e.g., "18 Oct 2026")
function formatDateIST(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const news = newsData.find((n) => n.slug === slug);

  if (!news) {
    return { title: "News Not Found | DevOrbit" };
  }

  return {
    title: `${news.title} | DevOrbit`,
    description: news.desc,
    openGraph: {
      title: news.title,
      description: news.desc,
      images: news.image ? [{ url: news.image }] : [],
    },
    alternates: {
      canonical: `https://www.devorbittech.in/news/${news.slug}`,
    },
  };
}

export default async function NewsDetails({ params }) {
  const { slug } = await params;
  const news = newsData.find((n) => n.slug === slug);

  // ✅ 1. Check !news FIRST so news.id doesn't crash the app
  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">News not found ❌</h1>
      </div>
    );
  }

  // ✅ 2. Match by ID or Slug safely
  const article = Array.isArray(finaldata)
    ? finaldata.find(
        (a) =>
          String(a?.id) === String(news.id) ||
          (a?.slug && a.slug === news.slug)
      )
    : String(finaldata?.id) === String(news.id)
    ? finaldata
    : null;

  const formattedDate = formatDateIST(news.date);

  return (
    <>
      <Navbar className="bg-black" />
      <div className="min-h-screen bg-linear-to-b from-white to-gray-100 px-6 pt-45 py-5 md:py-16">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex md:pt-12 items-center gap-2 text-xl md:text-sm text-blue-500 hover:text-blue-700 transition mb-8"
        >
          ← Back to News
        </Link>

        {/* Container */}
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide">
            {news.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4">
            {news.title}
          </h1>

          {/* Date, Time & Source */}
          <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm mt-3">
            {formattedDate && (
              <span className="font-medium text-gray-700">
                📅 {formattedDate}
              </span>
            )}
            {formattedDate && news.time && <span>•</span>}
            {news.time && <span>🕒 {news.time} IST</span>}
            {news.source && (
              <>
                <span>•</span>
                <span className="font-semibold text-blue-600">
                  {news.source}
                </span>
              </>
            )}
          </div>

          {/* Image */}
          {news.image && (
            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-100 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          )}

          {/* Content */}
          <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-4">
            {article?.content?.trim() ? (
              article.content
                .split("\n\n")
                .map((para, idx) => <p key={idx}>{para}</p>)
            ) : (
              <p>{news.desc}</p>
            )}
          </div>

          {/* Original Source Link */}
          {news.link && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Read Full Coverage on {news.source || "Google News"} ↗
              </a>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}