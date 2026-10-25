import newsData from "@/data/news.json";
import finaldata from "@/data/final-data.json";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollTop";
import { Space_Grotesk, Outfit } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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
    title: `${news.title} | DevOrbit Tech News`,
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

  // ✅ 1. Check !news FIRST
  if (!news) {
    return (
      <div className={`min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-6 text-center ${outfit.className}`}>
        <h1 className={`text-3xl font-bold mb-3 ${spaceGrotesk.className}`}>News not found ❌</h1>
        <p className="text-gray-400 text-sm mb-6">The article you are looking for doesn't exist or has been removed.</p>
        <Link href="/news" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-sm hover:scale-105 transition shadow-lg shadow-amber-500/25">
          Back to News
        </Link>
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
      <Navbar />
      
      {/* LUXURY DARK THEME CONTAINER */}
      <div className={`min-h-screen bg-[#030303] text-white px-5 sm:px-8 py-28 md:py-36 relative overflow-x-hidden ${outfit.className}`}>
        
        {/* 🌌 AMBER & AMETHYST AMBIENT GLOWS */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/15 via-purple-600/10 to-transparent blur-[160px]" />
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-amber-400 transition font-medium mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform text-amber-400">←</span> Back to Tech News
          </Link>

          {/* ARTICLE HEADER CARD */}
          <div className="p-6 sm:p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-500/10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-purple-500" />

            {/* Category Badge */}
            <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3.5 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider mb-6 shadow-sm">
              {news.category || "Tech Update"}
            </span>

            {/* Title */}
            <h1 className={`text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.2] ${spaceGrotesk.className}`}>
              {news.title}
            </h1>

            {/* Date, Time & Source Meta Bar */}
            <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs sm:text-sm mt-6 pt-6 border-t border-white/10 font-medium">
              {formattedDate && (
                <span className="text-gray-300 flex items-center gap-1.5">
                  🗓️ {formattedDate}
                </span>
              )}
              {formattedDate && news.time && <span className="text-gray-600">•</span>}
              {news.time && <span className="text-gray-300">🕒 {news.time} IST</span>}
              {news.source && (
                <>
                  <span className="text-gray-600">•</span>
                  <span className="text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {news.source}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {news.image && (
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl relative group">
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-auto max-h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="mt-12 text-gray-300 text-base sm:text-lg leading-relaxed space-y-6 font-light">
            {article?.content?.trim() ? (
              article.content
                .split("\n\n")
                .map((para, idx) => <p key={idx} className="leading-relaxed">{para}</p>)
            ) : (
              <p className="leading-relaxed">{news.desc}</p>
            )}
          </div>

          {/* Original Source Link Footer */}
          {news.link && (
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">Want to read the official release or full report?</p>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 text-black text-xs font-extrabold uppercase tracking-wider rounded-2xl hover:scale-105 transition shadow-lg shadow-amber-500/25"
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