"use client";

import Link from "next/link";
import { useState } from "react";
import newsData from "@/data/news.json";
import ScrollToTop from "@/components/ScrollTop";

export default function NewsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(newsData.map(item => item.category))];

  const groupedNews = newsData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="min-h-screen bg-[#030303] text-white px-5 sm:px-8 py-32 md:py-40 relative overflow-x-hidden">
        
        {/* 🌌 Ambient Glow Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-500/15 via-purple-600/10 to-transparent blur-[160px]" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* RE-DESIGNED HEADER SECTION */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
              
              {/* DATE & DAY */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Today's Edition
                </span>
                <p className="text-sm md:text-base text-gray-300 font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-amber-400 font-bold text-sm tracking-wide">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </p>
              </div>

              {/* MAIN TITLE */}
              <div className="text-left md:text-right">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-none">
                   <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-purple-500 text-transparent bg-clip-text">News</span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">
                  Curated insights, engineering updates & tech breakthroughs.
                </p>
              </div>

            </div>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* CATEGORY BAR (Clean Flowing Container - No Overlapping) */}
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-3 sm:p-4 rounded-3xl shadow-2xl">
            <div className="flex gap-2.5 overflow-x-auto sm:overflow-x-visible md:flex-wrap justify-start sm:justify-center items-center scrollbar-none py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-2xl sm:rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/25 scale-105"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* NEWS LIST (Safely Placed Below with Perfect Spacing) */}
          <div className="space-y-16 pt-4">
            {Object.keys(groupedNews)
              .filter((category) =>
                activeCategory === "All" ? true : category === activeCategory
              )
              .map((category) => (
                <div key={category} className="space-y-6">
                  
                  <h2 className="text-xl md:text-2xl font-bold text-amber-400 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
                    {category}
                  </h2>

                  <div className="space-y-4">
                    {groupedNews[category].map((news) => (
                      <div
                        key={news.slug}
                        className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4 shadow-lg"
                      >
                        <Link href={`/news/${news.slug}`} className="flex-1">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                              {news.title}
                            </h3>

                            <p className="text-sm text-gray-400 mt-2 line-clamp-2 font-light">
                              {news.desc}
                            </p>

                            <span className="text-amber-400 text-xs font-bold mt-3 inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                              Read article <span className="text-sm">→</span>
                            </span>
                          </div>
                        </Link>

                        <span className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 md:text-right whitespace-nowrap self-start md:self-center">
                          {news.time}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
          </div>

        </div>

      </div>
      <ScrollToTop />
    </>
  );
}