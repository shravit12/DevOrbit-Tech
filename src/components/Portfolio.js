"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    slug: "featured-projects",
    title: "Featured Projects",
    img: "/Untitled design.png",
    desc: "A collection of my recent work showcasing my skills in web development",
  },
  {
    id: "2",
    slug: "practice-projects",
    title: "Practice Projects",
    img: "/frontend_mentor.jpg",
    desc: "Collection of projects created by me as a frontend developer",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-black font-bold text-center relative  z-20"
      >
         PORTFOLIO
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <Link key={p.id} href={`/portfolio/${p.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-1">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.desc}</p>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

            </motion.div>
          </Link>
        ))}

      </div>
    </section>
  );
}