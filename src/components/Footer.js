import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-0 pt-16 pb-8 px-6 bg-linear-to-br from-zinc-800 to-black text-zinc-300 border-t border-white/10">

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-500">DevOrbit</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            We craft modern, high-performance websites and digital solutions
            that help businesses grow worldwide.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 text-lg mt-2">
            <a href="https://www.instagram.com/dev.orbit_12?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578562102973" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://wa.me/918219186568" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-500">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Web Development", "E-Commerce", "UI / UX Design", "Maintenance"].map((item, i) => (
              <li key={i} className="hover:text-white transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-500">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blogs" className="hover:text-white transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white transition">
                News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-500">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              Email:{" "}
              <span className="text-blue-500">
                sharmashravit@gmail.com
              </span>
            </li>
            <li>Location: India 🌍</li>
            <li className="text-green-400">Available for freelance</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-semibold">DevOrbit</span>. All rights reserved.
      </div>
    </footer>
  );
}