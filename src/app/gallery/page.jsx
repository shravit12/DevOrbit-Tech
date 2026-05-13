"use client";

import React, { useState } from "react";
import Link from "next/link";

const projects = [
  "/s_v2.webp",
  "/s_v3.webp",
  "/s_v4.webp",
  "/s_v5.webp",
  "/s_v6.webp",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-black px-6 py-20 relative">

      {/* BACK BUTTON */}
      {!selectedImage && (
        <div className="max-w-7xl mx-auto mb-10">
          <Link href="/portfolio">
            <button className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition duration-300">
              ← Back
            </button>
          </Link>
        </div>
      )}

      {/* HEADING */}
      {!selectedImage && (
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            Project Gallery
          </h1>

          <p className="text-gray-400 mt-4">
            Explore all creative works and experiments.
          </p>
        </div>
      )}

      {/* GALLERY GRID */}
      {!selectedImage && (
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden rounded-3xl bg-white p-4 cursor-pointer transition duration-500 hover:-translate-y-2"
            >

              <img
                src={img}
                className="w-full h-72 object-contain transition duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6 rounded-3xl">

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Project {i + 1}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    Click to preview
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      )}

      {/* FULLSCREEN IMAGE VIEW */}
      {selectedImage && (
        <div className="fixed inset-0 z-999 bg-black flex items-center justify-center p-6">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black text-2xl hover:scale-110 transition duration-300"
          >
            ×
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
          />

        </div>
      )}

    </div>
  );
};

export default Gallery;