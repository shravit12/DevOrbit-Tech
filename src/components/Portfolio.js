"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaFolderOpen, FaCode } from "react-icons/fa";

const projects = [
  {
    id: "1",
    slug: "featured-project",
    title: "Featured Projects",
    badge: "Production Work",
    img: "/Untitled design.png",
    desc: "A collection of my recent work showcasing my skills in full-stack web development and modern UI design.",
    accent: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    id: "2",
    slug: "practice-projects",
    title: "Practice Projects",
    badge: "Frontend Mentor & Labs",
    img: "/frontend_mentor.jpg",
    desc: "Collection of responsive UI challenges and interactive projects created by me as a frontend developer.",
    accent: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    hoverBorder: "hover:border-purple-500/50",
  },
];

export default function Portfolio() {
  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-3xl font-bold">No Projects Found</h1>
        <p className="text-zinc-400 mt-2">
          Please add projects to display here.
        </p>
      </div>
    );
  }

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* 🌌 Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3 relative z-10"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest">
          <FaFolderOpen className="text-xs" />
          Our Work
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Portfolio
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Explore real-world web applications, high-converting landing pages, and
          frontend engineering challenges.
        </p>
      </motion.div>

      {/* GRID (Centered 2-Column Layout for 2 Cards) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <Link key={p.id} href={`/portfolio/${p.slug}`} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative h-full flex flex-col justify-between rounded-3xl overflow-hidden bg-[#0D1326]/80 backdrop-blur-xl border border-white/10 ${p.hoverBorder} shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer`}
            >
              {/* TOP: IMAGE CONTAINER */}
              <div>
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle Image Bottom Gradient for Smooth Blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1326] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-gradient-to-r border ${p.accent}`}
                    >
                      <FaCode className="text-[10px]" />
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* MIDDLE: TEXT CONTENT */}
                <div className="p-6 sm:p-7 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* BOTTOM: INTERACTIVE FOOTER BAR */}
              <div className="px-6 sm:px-7 pb-6 pt-3 flex items-center justify-between border-t border-white/5 text-xs sm:text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                <span>Explore Projects</span>
                <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}