"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import blogs from "@/data/blogs.json";
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

export default function Blogs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const scrollRef = useRef(null);

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];
  
  const filteredBlogs =
    activeTab === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeTab);

  // Function to scroll categories left/right on desktop click
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = async () => {
    if (!email) return;

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setMessage(data.message);
    setEmail("");
  };

  return (
    <div className={`min-h-screen bg-[#030303] text-white px-5 sm:px-8 py-28 md:py-36 relative overflow-x-hidden ${outfit.className}`}>
      
      {/* 🌌 AMBER & AMETHYST AMBIENT GLOWS */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-500/15 via-purple-600/10 to-transparent blur-[160px]" />
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-2/3 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      <Navbar />

      {/* 🧭 ELITE CATEGORY SCROLLER BAR WITH ARROWS */}
      <div className="max-w-4xl mx-auto mb-14 relative flex items-center">
        
        {/* 👈 Left Arrow Button (Laptop/Desktop) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-5 z-20 w-10 h-10 items-center justify-center rounded-full bg-[#0c0a0e]/90 border border-white/15 text-amber-400 hover:bg-amber-500 hover:text-black transition shadow-xl backdrop-blur-md"
          aria-label="Scroll Left"
        >
          ←
        </button>

        {/* Scrollable Container (Hidden Scrollbar, Touch & Arrow Friendly) */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-none whitespace-nowrap px-4 py-3 w-full justify-start md:justify-center items-center bg-[#0c0a0e]/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 text-black shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-white/[0.04] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 👉 Right Arrow Button (Laptop/Desktop) */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-5 z-20 w-10 h-10 items-center justify-center rounded-full bg-[#0c0a0e]/90 border border-white/15 text-amber-400 hover:bg-amber-500 hover:text-black transition shadow-xl backdrop-blur-md"
          aria-label="Scroll Right"
        >
          →
        </button>

      </div>

      {/* BLOG CARDS GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        
        {blogs.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center text-center py-20 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-2xl px-6 shadow-2xl">
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 text-white ${spaceGrotesk.className}`}>
              No Blogs Yet !!!
            </h2>

            <p className="text-gray-400 max-w-md mb-8 text-sm md:text-base font-light leading-relaxed">
              Be the first to get notified when new blogs arrive 🚀
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
              />

              <button
                onClick={handleSubscribe}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition shadow-lg shadow-amber-500/25"
              >
                Notify Me
              </button>
            </div>

            {message && (
              <p className="text-amber-400 mt-4 text-xs sm:text-sm font-semibold">{message}</p>
            )}
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="h-full">
              <div className="group relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:bg-white/[0.06] flex flex-col justify-between h-full min-h-[280px] shadow-xl overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-purple-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500" />

                <div>
                  {/* Category & Date Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {blog.category || "Tech"}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className={`text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug ${spaceGrotesk.className}`}>
                    {blog.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mt-3 text-sm line-clamp-3 leading-relaxed font-light">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-amber-400 transition flex items-center gap-1.5">
                    Read article <span className="group-hover:translate-x-1 transition">→</span>
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs text-gray-400 group-hover:border-amber-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-all">
                    ↗
                  </div>
                </div>

              </div>
            </Link>
          ))
        )}

      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}