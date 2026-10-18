import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaCode,
  FaRocket,
  FaShoppingCart,
  FaBug,
  FaLayerGroup,
  FaPaintBrush,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function HireMe() {
  const services = [
    {
      title: "Custom Website Development",
      desc: "Blazing-fast, SEO-ready business websites built with Next.js, React, and Tailwind CSS.",
      icon: <FaCode />,
      color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Modern, conversion-focused landing pages designed to turn visitors into paying clients.",
      icon: <FaRocket />,
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    },
    {
      title: "E-Commerce Stores",
      desc: "Scalable online stores with seamless checkout, payment gateways, and product management.",
      icon: <FaShoppingCart />,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      title: "Bug Fixing & Optimization",
      desc: "Speed optimization, Core Web Vitals fixes, responsive layout repairs, and clean debugging.",
      icon: <FaBug />,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
    {
      title: "Full-Stack Web Apps",
      desc: "End-to-end web applications with Node.js backends, REST APIs, and database integration.",
      icon: <FaLayerGroup />,
      color: "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      title: "Website Redesign",
      desc: "Transform outdated websites into modern, premium digital experiences that stand out.",
      icon: <FaPaintBrush />,
      color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discuss Idea",
      desc: "We align on your project goals, target audience, timeline, and core requirements.",
    },
    {
      num: "02",
      title: "Plan & Design",
      desc: "I structure the architecture, wireframes, and modern UI/UX tailored to your brand.",
    },
    {
      num: "03",
      title: "Develop & Test",
      desc: "Clean, responsive code built with modern frameworks and tested across all devices.",
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Smooth deployment to production with post-launch support and performance checks.",
    },
  ];

  const platforms = [
    {
      name: "Fiverr",
      tagline: "Browse packages & instant gigs",
      href: "https://www.fiverr.com/shravitsharma/buying?source=avatar_menu_profile",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      btnClass: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25",
    },
    {
      name: "Upwork",
      tagline: "Hourly or milestone contracts",
      href: "https://www.upwork.com/freelancers/~011a2fbca793265330",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      btnClass: "bg-blue-600 hover:bg-blue-500 shadow-blue-600/25",
    },
    {
      name: "Freelancer",
      tagline: "Custom project bidding & milestones",
      href: "https://www.freelancer.in/u/sharmashravit2",
      badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      btnClass: "bg-purple-600 hover:bg-purple-500 shadow-purple-600/25",
    },
  ];

  const socialChannels = [
    {
      name: "Email",
      handle: "sharmashravit@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sharmashravit@gmail.com",
      icon: <FaEnvelope />,
      hover: "hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400",
    },
    {
      name: "WhatsApp",
      handle: "+91 82191 86568",
      href: "https://wa.me/918219186568",
      icon: <FaWhatsapp />,
      hover: "hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400",
    },
    {
      name: "Instagram",
      handle: "@dev.orbit_12",
      href: "https://www.instagram.com/dev.orbit_12/",
      icon: <FaInstagram />,
      hover: "hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400",
    },
    {
      name: "Facebook",
      handle: "DevOrbit Official",
      href: "https://www.facebook.com/profile.php?id=61578562102973&sk=about",
      icon: <FaFacebook />,
      hover: "hover:border-blue-600/50 hover:bg-blue-600/10 text-blue-500",
    },
    {
      name: "GitHub",
      handle: "@shravit12",
      href: "https://github.com/shravit12",
      icon: <FaGithub />,
      hover: "hover:border-zinc-400/50 hover:bg-white/10 text-zinc-200",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#070A12] text-white px-6 pt-36 pb-24 overflow-hidden">
        {/* 🌌 Ambient Background Glows */}
        <div className="pointer-events-none absolute top-20 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto space-y-24">
          {/* 1. HERO SECTION */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for New Projects & Freelance Contracts
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Let’s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">
                Extraordinary
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              I help startups, agencies, and businesses build blazing-fast,
              modern, and scalable web applications. Let’s turn your vision into
              a high-performing digital product.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/918219186568"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 transition-all"
              >
                <FaWhatsapp className="text-lg" />
                Quick Chat on WhatsApp
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmashravit@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-semibold hover:-translate-y-0.5 transition-all"
              >
                <FaEnvelope />
                Send an Email
              </a>
            </div>
          </section>

          {/* 2. SERVICES GRID */}
          <section className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                What You Can Hire Me For
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                Tailored development solutions engineered for speed, SEO, and
                user conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center text-xl mb-5 ${service.color}`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. WORKFLOW / PROCESS */}
          <section className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                A transparent, streamlined 4-step process from initial concept
                to launch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        Step {step.num}
                      </span>
                      <FaCheckCircle className="text-zinc-700" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. FREELANCE MARKETPLACES */}
          <section className="space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Trusted Marketplaces
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Hire Me on Freelance Platforms
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                Prefer working through an escrow platform? Connect with me
                directly on your favorite marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {platforms.map((platform, i) => (
                <a
                  key={i}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center justify-between gap-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-2">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${platform.badgeColor}`}
                    >
                      Verified Profile
                    </span>
                    <h3 className="text-2xl font-bold text-white pt-1">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-zinc-400">{platform.tagline}</p>
                  </div>

                  <span
                    className={`w-full py-3 px-5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all ${platform.btnClass}`}
                  >
                    Hire on {platform.name}
                    <FaExternalLinkAlt className="text-xs" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* 5. DIRECT SOCIAL & CONTACT CHANNELS */}
          <section className="space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Direct Channels
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Connect With Me</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {socialChannels.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:-translate-y-1 ${item.hover}`}
                >
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xs text-zinc-400 truncate">
                      {item.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 6. BOTTOM CTA BANNER */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-white/15 p-8 sm:p-12 text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Ready to Start Your Project? 🚀
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base">
                Send me a message with your project details and I’ll get back to
                you within 24 hours with a free consultation and estimate.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmashravit@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-xl shadow-purple-600/25 hover:scale-105 transition-all"
              >
                <FaEnvelope />
                Send Mail Now
              </a>
              <a
                href="https://wa.me/918219186568"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold text-white shadow-xl shadow-emerald-600/25 hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Me
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}