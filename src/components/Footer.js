import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUpRightFromSquare,
} from "react-icons/fa";

export default function Footer() {
  const services = [
    { name: "Web Development", href: "/service" },
    { name: "E-Commerce Solutions", href: "/service" },
    { name: "UI / UX Design", href: "/service" },
    { name: "Website Maintenance", href: "/service" },
  ];

  const quickLinks = [
    { name: "Blogs", href: "/blogs" },
    { name: "Services", href: "/service" },
    { name: "News", href: "/news" },
    { name: "Privacy Policy", href: "/privacypolicy" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/dev.orbit_12?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      hoverClass:
        "hover:bg-pink-500/15 hover:text-pink-400 hover:border-pink-500/40",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      href: "https://www.facebook.com/profile.php?id=61578562102973",
      hoverClass:
        "hover:bg-blue-500/15 hover:text-blue-400 hover:border-blue-500/40",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/918219186568",
      hoverClass:
        "hover:bg-emerald-500/15 hover:text-emerald-400 hover:border-emerald-500/40",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#070A12] text-zinc-300 pt-16 pb-10 px-6 border-t border-white/10">
      {/* ✨ Top Gradient Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      {/* 🌌 Subtle Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* 1. BRAND COLUMN (4 Cols on Desktop) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">
                DevOrbit
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            </Link>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              We craft modern, high-performance websites and scalable digital
              solutions that help brands and startups grow worldwide.
            </p>

            {/* LIVE FREELANCE STATUS BADGE */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance Projects
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg text-zinc-300 transition-all duration-300 hover:-translate-y-1 ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. SERVICES (2.5 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {services.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. QUICK LINKS (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO (3 Cols) */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Get In Touch
            </h4>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3.5 text-sm">
              <a
                href="mailto:sharmashravit@gmail.com"
                className="flex items-start gap-3 text-zinc-300 hover:text-blue-400 transition group"
              >
                <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition">
                  <FaEnvelope className="text-xs" />
                </span>
                <div className="overflow-hidden">
                  <p className="text-xs text-zinc-500">Email Us</p>
                  <p className="font-medium truncate">
                    sharmashravit@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-zinc-300">
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <FaMapMarkerAlt className="text-xs" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="font-medium">India 🌍 (Remote Worldwide)</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-blue-400 font-semibold hover:underline"
            >
              DevOrbit
            </Link>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacypolicy"
              className="hover:text-zinc-300 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}