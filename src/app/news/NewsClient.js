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
    <div className="min-h-screen bg-white text-black px-6 py-45 pb-0">

      {/* HEADER */}
      <div className="bg-white text-black px-2 md:px-0 pt-5">
        <div className="max-w-8xl flex justify-between items-end mb-1">
          
          {/* DATE */}
          <div className="text-sm md:text-base text-black sm:text-gray-600">
            <p>
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>

            <p>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center">
           DevOrbit News
          </h1>

          <div className="hidden md:block w-32"></div>
        </div>
        <hr />
      </div>

      {/* CATEGORY SCROLL */}
   <div className="sticky top-15 z-40 bg-white">
  <div className="w-full overflow-x-auto scrollbar-hide">
    <div className="flex gap-4 whitespace-nowrap py-4 px-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-5 py-2 rounded-full ${
            activeCategory === cat
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
</div>

      {/* NEWS LIST */}
      {Object.keys(groupedNews)
        .filter((category) =>
          activeCategory === "All" ? true : category === activeCategory
        )
        .map((category) => (
          <div key={category} className="mb-16">
            
            <h2 className="text-xl md:text-2xl font-semibold mb-6 mt-2 text-blue-400">
              {category}
            </h2>

            <div className="space-y-2">
              {groupedNews[category].map((news) => (
                <div
                  key={news.slug}
                  className="p-2 md:px-52 rounded-xl border border-white/10 hover:bg-white/10 transition flex flex-col md:flex-row md:justify-between md:items-center gap-2"
                >
                  <Link href={`/news/${news.slug}`}>
                    <div>
                      <h3 className="text-xl md:text-xl font-semibold">
                        {news.title}
                      </h3>

                      <p className="text-sm text-zinc-400 mt-1 line-clamp-1">
                        {news.desc}
                      </p>

                      <span className="text-black/90 text-sm font-medium mt-1 inline-flex items-center gap-1 hover:underline cursor-pointer">
                        read more <span>»»</span>
                      </span>
                    </div>
                  </Link>

                  <span className="text-xs text-zinc-500 md:text-right">
                    {news.time}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
    </div>
    <ScrollToTop />
    </>
  );
}