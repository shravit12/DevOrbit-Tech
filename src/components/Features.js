"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Web Development",
    description: "Custom business websites, responsive, fast, and SEO-friendly.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce",
    description: "Scalable online stores with Shopify, WooCommerce & custom builds.",
    icon: "🛒",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "UI/UX & Branding",
    description: "Modern UI, strong brand identity & high-converting design.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-16">
      
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-6 bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition duration-300 group"
        >
          
          {/* ICON */}
          <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">
            {feature.icon}
          </div>

          {/* TITLE */}
          <h2
            className={`text-xl font-semibold mb-3 bg-linear-to-r ${feature.color} bg-clip-text text-transparent`}
          >
            {feature.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 text-sm">
            {feature.description}
          </p>

          {/* GLOW EFFECT */}
          <div
            className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 bg-linear-to-r ${feature.color}`}
          ></div>

        </motion.div>
      ))}

    </div>
  );
}