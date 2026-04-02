"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white text-black backdrop-blur-xl rounded-3xl p-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-white/10"
    >
      
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-left space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Build Your Digital Presence 
        </h1>

        <p className="text-black text-lg">
          We design, develop & maintain blazing-fast websites, landing pages,
          and web apps using modern technologies like React & Node.js.
        </p>

        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300"
        >
          Contact Us
        </Link>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="relative w-72 h-72 rounded-full">

          {/* GLOW */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-linear-to-r from-blue-500/30 to-purple-500/30 animate-pulse"></div>

          {/* IMAGE */}
          <Image
            src="/my_profile (1).webp"
           alt="Shravit web developer portfolio profile image"
            width={300}
            height={300}
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>
      </motion.div>

    </motion.div>
  );
}
