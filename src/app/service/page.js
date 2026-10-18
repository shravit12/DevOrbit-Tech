import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaBolt,
  FaRobot,
  FaAward,
  FaCode,
  FaRocket,
  FaShoppingCart,
  FaSearchDollar,
  FaTools,
  FaLayerGroup,
  FaCheckCircle,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

export default function WhyDeveloper() {
  const importancePillars = [
    {
      badge: "Brand Authority",
      title: "First Impressions Matter",
      desc: "Your website is the very first interaction clients have with your brand. A bespoke, modern UI builds instant credibility and trust within seconds.",
      icon: <FaAward />,
      accent: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    },
    {
      badge: "Core Web Vitals",
      title: "Speed = Revenue",
      desc: "Every extra second of load time costs conversions. Blazing-fast, optimized websites retain visitors, lower bounce rates, and rank higher on Google.",
      icon: <FaBolt />,
      accent:
        "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
    {
      badge: "24/7 Scalability",
      title: "Automation & Growth",
      desc: "Custom web apps and automated workflows eliminate repetitive manual tasks, capture leads around the clock, and scale effortlessly with your business.",
      icon: <FaRobot />,
      accent:
        "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  const offerings = [
    {
      title: "Custom Website Development",
      desc: "Tailor-made, responsive websites architected from scratch for your brand identity.",
      icon: <FaCode />,
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Strategically structured pages engineered to maximize leads, sign-ups, and sales.",
      icon: <FaRocket />,
    },
    {
      title: "E-Commerce Websites",
      desc: "Secure, scalable online stores with smooth checkout flows and inventory control.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Website Optimization (Speed + SEO)",
      desc: "Technical SEO, metadata structuring, and performance tuning for top search rankings.",
      icon: <FaSearchDollar />,
    },
    {
      title: "Bug Fixing & Maintenance",
      desc: "Proactive security updates, rapid issue resolution, and continuous uptime monitoring.",
      icon: <FaTools />,
    },
    {
      title: "Full-Stack Web Applications",
      desc: "Complete custom web platforms with dynamic dashboards, APIs, and databases.",
      icon: <FaLayerGroup />,
    },
  ];

  const skillsAndTools = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <FaLayerGroup className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-emerald-400" /> },
    { name: "Express", icon: <FaServer className="text-zinc-300" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <FaPaintBrush className="text-sky-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "API Integration", icon: <FaCode className="text-indigo-400" /> },
    { name: "Automation Scripts", icon: <FaRobot className="text-purple-400" /> },
  ];

  const whyChooseMe = [
    {
      title: "Fast & Reliable Delivery",
      desc: "Clean agile milestones and on-time launches without compromising code quality.",
      badge: "⚡ Speed",
    },
    {
      title: "Modern, High-End UI/UX",
      desc: "Sleek, mobile-first interfaces designed for intuitive navigation and visual impact.",
      badge: "🎨 Design",
    },
    {
      title: "SEO & Conversion Focused",
      desc: "Built from the ground up with semantic HTML, fast load times, and clear user journeys.",
      badge: "🚀 Growth",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[#070A12] text-white px-6 pt-36 pb-24 overflow-hidden">
        {/* 🌌 Ambient Background Glows */}
        <div className="pointer-events-none absolute top-16 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto space-y-24">
          {/* 1. HERO SECTION */}
          <section className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Digital Transformation & Growth
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Why Your Business Needs a{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">
                Dedicated Web Developer
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              In today’s digital world, your website is the core of your brand
              identity. A skilled developer transforms your vision into a
              high-performing engine that attracts, engages, and converts
              customers 24/7.
            </p>
          </section>

          {/* 2. CORE IMPORTANCE PILLARS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importancePillars.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br border flex items-center justify-center text-xl ${item.accent}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* 3. WHAT I OFFER (SERVICES) */}
          <section className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                What I Offer 💼
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                End-to-end web development services designed to help your
                business stand out and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {offerings.map((service, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center text-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. SKILLS & TOOLS */}
          <section className="space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                Modern Tech Stack
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                My Skills & Tools ⚡
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                Powered by industry-leading technologies for maximum speed,
                security, and maintainability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 justify-center max-w-4xl mx-auto">
              {skillsAndTools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 rounded-full text-sm font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="text-base">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. WHY CHOOSE ME */}
          <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                The DevOrbit Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Me? 🔥
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                I don’t just write code — I build complete business solutions
                focused on performance, clean UI, and measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyChooseMe.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-emerald-500/40 rounded-2xl p-7 space-y-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      {item.badge}
                    </span>
                    <FaCheckCircle className="text-emerald-400 text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. BOTTOM CTA BANNER */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-white/15 p-8 sm:p-12 text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Let’s Build Something Amazing Together 🚀
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base">
                Ready to elevate your online presence? Let’s discuss your
                project goals and craft a solution tailored to your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-xl shadow-purple-600/25 hover:scale-105 transition-all"
              >
                Contact Me
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl font-semibold text-zinc-200 hover:scale-105 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}