"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import blogs from "@/data/blog";

export default function Blogs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <>
      <div className="min-h-screen bg-black text-white px-6 py-8 pt-40">
        <Navbar />

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {blogs.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center text-center pb-0 py-10">

              <h2 className="text-4xl font-bold mb-3">
                No Blogs Yet !!!
              </h2>

              <p className="text-zinc-400 max-w-md mb-6">
                Be the first to get notified when new blogs arrive 🚀
              </p>

              {/* Email Input */}
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-white outline-none"
                />

                <button
                  onClick={handleSubscribe}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                >
                  Notify Me
                </button>
              </div>

              {/* Success Message */}
              {message && (
                <p className="text-green-400 mt-4">{message}</p>
              )}
            </div>
          ) : (
            blogs.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <div className="group py-6 border-b border-white/10 cursor-pointer flex flex-col justify-between min-h-55 hover:bg-black/70 px-4 rounded-lg transition relative">

                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-zinc-400 mt-2 text-sm md:text-base line-clamp-2">
                    {blog.desc}
                  </p>

                  <span className="text-blue-400 text-sm mt-2">
                    Read more →
                  </span>

                  <span className="absolute bottom-4 right-4 text-xs">
                    {blog.date}
                  </span>
                </div>
              </Link>
            ))
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}