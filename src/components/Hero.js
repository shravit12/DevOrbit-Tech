"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaCode,
  FaReact,
  FaRocket,
} from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0D1326]/95 via-[#090D1A]/95 to-[#070A12]/95 text-white backdrop-blur-2xl p-8 sm:p-12 md:p-14 shadow-[0_25px_70px_-15px_rgba(37,99,235,0.25)] border border-white/10"
    >
      {/* ✨ Top Neon Highlight Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

      {/* 🌌 Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      {/* 🕸️ Subtle Cyber Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
        {/* ================= LEFT SIDE (7 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:col-span-7 text-left space-y-6"
        >
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for Freelance & New Projects
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">
              Digital Presence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl">
            We design, develop & maintain blazing-fast websites, high-converting
            landing pages, and scalable web apps using modern technologies like{" "}
            <span className="text-white font-semibold underline decoration-blue-500/50 underline-offset-4">
              React, Next.js & Node.js
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/service"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-zinc-200 font-semibold rounded-xl backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust / Feature Highlights */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <FaBolt className="text-amber-400" />
              <span>Blazing-Fast Load Times</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              <span>SEO & Mobile Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="text-purple-400" />
              <span>Scalable Architecture</span>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE (5 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-76 sm:h-76 flex items-center justify-center">
            {/* Ambient Pulse Aura */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-tr from-blue-500/35 via-indigo-500/25 to-purple-500/35 animate-pulse" />

            {/* Outer Rotating Dashed Orbital Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-blue-400/30"
            />

            {/* Inner Counter-Rotating Gradient Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 rounded-full border-2 border-transparent border-t-blue-400/60 border-r-purple-400/60"
            />

            {/* Profile Image Container */}
            <div className="relative z-10 w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#070A12]">
                <Image
                  src="/my_profile (1).webp"
                  alt="Shravit web developer portfolio profile image"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Badge 1: React & Next.js */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0D1326]/90 backdrop-blur-md border border-white/15 shadow-xl"
            >
              <FaReact className="text-cyan-400 text-lg animate-spin" style={{ animationDuration: "10s" }} />
              <span className="text-xs font-bold text-white">React & Next.js</span>
            </motion.div>

            {/* Floating Badge 2: Full-Stack Dev */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0D1326]/90 backdrop-blur-md border border-white/15 shadow-xl"
            >
              <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                <FaCode className="text-xs" />
              </span>
              <span className="text-xs font-bold text-white">Full-Stack Dev</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}