"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ className = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // 1. Hide/Show logic based on scroll direction
      if (currentScroll > lastScroll && currentScroll > 80) {
        // Scrolling Down → Hide Navbar
        setShowNavbar(false);
        setMenuOpen(false); // बंद कर दें अगर मेनू खुला हो
      } else {
        // Scrolling Up → Show Navbar
        setShowNavbar(true);
      }

      // 2. Style change when scrolled down from top
      if (currentScroll > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-in-out will-change-transform ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "top-0 w-full rounded-none px-6 sm:px-12 py-3 bg-[#030303]/90 backdrop-blur-2xl border-b border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          : "top-6 w-[92%] max-w-4xl rounded-full px-6 py-2.5 bg-gradient-to-r from-white/[0.09] via-white/[0.04] to-white/[0.09] backdrop-blur-2xl border border-amber-500/30 shadow-[0_20px_50px_rgba(245,158,11,0.1)]"
      } ${className}`}
    >
      <div className="flex justify-between items-center text-white">
        
        {/* LOGO */}
        <h1 className="font-bold flex items-center">
          <Link href="/" className="hover:opacity-80 transition flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DevOrbit"
              width={42}
              height={42}
              className="rounded-xl object-contain shadow-md"
            />
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link href="/portfolio">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-orange-500/25">
              Portfolio
            </button>
          </Link>
          <Link href="/blogs" className="text-gray-300 hover:text-amber-400 transition-colors">Blog</Link>
          <Link href="/service" className="text-gray-300 hover:text-amber-400 transition-colors">Services</Link>
          <Link href="/news" className="text-gray-300 hover:text-amber-400 transition-colors">News</Link>
          <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Action Bar */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/portfolio">
            <button className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20">
              Portfolio
            </button>
          </Link>

          <button
            className="text-white text-xl p-2 rounded-xl bg-white/10 border border-white/15 hover:bg-white/20 transition shadow-inner"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute left-0 top-full mt-3 w-full bg-[#060408]/98 backdrop-blur-3xl border border-amber-500/30 rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.95)] ${
            menuOpen ? "max-h-96 py-8 px-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 text-lg font-semibold text-gray-200">
            <Link href="/blogs" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">Blog</Link>
            <Link href="/service" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">Services</Link>
            <Link href="/news" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">News</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">Contact</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}