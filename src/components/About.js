"use client";

import { FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen px-6 py-25 bg-black text-white relative  z-20">
      
      {/* CONTAINER */}
      <div className="max-w-4xl mx-auto space-y-10 z-500">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl relative  z-20 font-bold">
            Dev Orbit 🚀
          </h1>
          <p className="text-zinc-400 text-sm md:text-base relative  z-20">
            We build fast, modern & scalable websites for brands and startups.
          </p>
        </div>

        {/* CONTACT CARDS (SMALL) */}
        <div className="grid grid-cols-3 gap-4 text-center relative  z-20">
          
          <a
            href="mailto:sharmashravit@gmail.com"
            className="p-4 rounded-xl bg-white group hover:bg-zinc-800  transition flex flex-col items-center gap-2"
          >
            <FaEnvelope className="text-blue-400 text-xl" />
            <span className="text-xs text-black group-hover:text-white">Email</span>
          </a>

          <a
            href="https://wa.me/918219186568"
            target="_blank"
            className="p-4 rounded-xl bg-white group hover:bg-zinc-800  transition flex flex-col items-center gap-2"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            <span className="text-xs text-black group-hover:text-white">WhatsApp</span>
          </a>

          <a
            href="https://maps.google.com/?q=India"
            target="_blank"
            className="p-4 rounded-xl bg-white group hover:bg-zinc-800 transition flex flex-col items-center gap-2"
          >
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <span className="text-xs text-black group-hover:text-white">Location</span>
          </a>

        </div>

        {/* SERVICES (SHORT) */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-center text-blue-500">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-zinc-900">Web Development</div>
            <div className="p-4 rounded-xl bg-zinc-900">web Maintenance</div>
            <div className="p-4 rounded-xl bg-zinc-900">System Setup</div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center gap-5 text-xl">
          <a href="https://www.instagram.com/dev.orbit_12?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578562102973" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://wa.me/918219186568" className="hover:text-green-500">
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </div>
  );
}