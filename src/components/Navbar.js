"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar({ className = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
  const currentScroll = window.scrollY;

  // Scroll down → expand
  if (currentScroll > 50) {
    setScrolled(true);
  }

  // Only shrink when near top
  if (currentScroll <= 10) {
    setScrolled(false);
  }

  setLastScroll(currentScroll);
};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
   <nav
  className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-900 ease-in-out will-change-transform ${
    scrolled
      ? "top-0 w-full rounded-none px-10 py-2 bg-linear-to-r from-blue-500 to-purple-600 shadow-lg"
      : "top-6 w-[90%] max-w-4xl rounded-full px-6 py-1 bg-linear-to-r from-blue-500 to-purple-600backdrop-blur-md"
  } ${className}`}
>
      <div className="flex justify-between items-center text-white">
        <h1 className="font-bold"><Link href="/"><Image
      src="/logo.png"
      alt="DevOrbit"
      width={55}
      height={55}
    /></Link></h1>

       {/* Desktop Menu */}
<div className="hidden md:flex gap-6 text-sm">
  <Link href="/blogs">Blog</Link>
  <Link href="/service">Services</Link>
  <Link href="/news">news</Link>
  <Link href="/contact">contact</Link>
</div>

{/* Mobile Button */}
<button
  className="md:hidden text-white text-xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

<div
  className={`md:hidden absolute  left-0 top-full w-full  bg-linear-to-r from-blue-500 to-purple-600  overflow-hidden transition-all duration-300 ${
    menuOpen ? "max-h-90 py-12  " : "max-h-0"
  }`}
>
  <div className="flex flex-col items-center gap-10 text-4xl rounded-full text-white/90">
    <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blog</Link>
    <Link href="/service" onClick={() => setMenuOpen(false)}>Services</Link>
    <Link href="/news" onClick={() => setMenuOpen(false)}>News</Link>
    <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
  </div>
</div>
      </div>
    </nav>
  );
}