"use client";

import Link from "next/link";
import { Space_Grotesk, Outfit } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"], 
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const projectsData = [
  {
    id: 1,
    title: "Path Finder App",
    description: "Create a visual Map Path Shortest Finder with custom algorithms.",
    tech: ["React", "Tailwind", "Next.js"],
    link: "https://path-finder-three-zeta.vercel.app/",
    status: "Completed",
  },
  {
    id: 2,
    title: "Medical Clinic Portal",
    description: "Website for Doctors and Clinics with scheduling integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://med-clinic-one.vercel.app/",
    status: "Completed",
  },
  {
    id: 3,
    title: "Slow Scroller Web",
    description: "Fella Website for a smooth and slow scrolling experience.",
    tech: ["React.js", "AI", "Tailwind"],
    link: "https://fella-web.vercel.app/",
    status: "Completed",
  },
  {
    id: 4,
    title: "Typing Speed Tester",
    description: "Real-time Speed Tester by Keyboard with accuracy metrics.",
    tech: ["React", "Tailwind"],
    link: "https://typing-speed-tester-kappa-two.vercel.app/",
    status: "Completed",
  },
  {
    id: 5,
    title: "Extension Manager",
    description: "Frontend Mentor / UI of a modern Extension manager.",
    tech: ["React", "Tailwind", "Data"],
    link: "https://extension-manager-beta.vercel.app/",
    status: "Completed",
  },
  {
    id: 6,
    title: "Country Details App",
    description: "Get comprehensive details about all countries via REST API.",
    tech: ["React", "Tailwind", "API"],
    link: "https://country-details-app-seven.vercel.app/",
    status: "Completed",
  },
];

export default function PortfolioPage() {
  return (
    // THEME: "Abyssal Slate" background - an extremely dark, rich blue/black
    <div className={`min-h-screen bg-[#010308] text-white px-6 py-20 md:py-32 relative overflow-hidden ${outfit.className}`}>
      
      {/* 🌌 FRESH BACKGROUND EFFECTS: "Bioluminescent Grid" */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Electric Lime & Cyan Glows */}
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-lime-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[130px]" />
        <div className="absolute -bottom-40 left-1/4 w-[40rem] h-[40rem] bg-emerald-600/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HERO HEADER */}
        <div className="text-center mb-32 relative">
          {/* Cyber-Mint Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 text-xs text-lime-300 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(132,204,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping absolute"></span>
            <span className="w-2 h-2 rounded-full bg-lime-400 relative shadow-[0_0_10px_rgba(132,204,22,0.8)]"></span>
            AVAILABLE FOR FREELANCE • MODERN WEB SOLUTIONS
          </div>

          <h2 className="text-xs md:text-sm tracking-[0.3em] text-gray-500 uppercase font-semibold mb-6">
            Design • Develop • Deploy
          </h2>

          <h1 className={`mt-2 text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] ${spaceGrotesk.className}`}>
            <span className="text-white">Hi, I'm </span>
            <br className="md:hidden" />
            {/* Liquid Tech Gradient (Lime -> Emerald -> Cyan) */}
            <span className="bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_40px_rgba(52,211,153,0.3)]">
              Shravit
            </span>
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-lime-400 to-cyan-500 mx-auto mt-12 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.4)]" />

          <p className="mt-10 text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            I build blazing-fast, scalable web experiences using Next.js & .NET. 
            Focused on pixel-perfect design and enterprise-grade performance.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className={`text-lg text-white uppercase tracking-widest ${spaceGrotesk.className}`}>
              Featured Engineering
            </h2>
            <span className="text-xs uppercase tracking-widest text-lime-400 font-bold bg-lime-500/10 px-4 py-1.5 rounded-full border border-lime-500/20">Case Study</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#050B14]/60 p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-lime-500/30 transition-all duration-500 backdrop-blur-xl">
            <div className="pr-0">
              <h3 className={`text-4xl md:text-5xl font-bold text-white leading-tight ${spaceGrotesk.className}`}>
                IMDB Frontend Architecture
              </h3>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                A highly responsive movie database portal. Engineered with advanced state management, complex API routing, and a seamless cinematic user experience.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["React", "Tailwind CSS", "Vite", "REST API"].map((t) => (
                  <span key={t} className="text-sm font-medium px-4 py-2 rounded-xl bg-[#0A1220] border border-white/10 text-emerald-200">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="mt-10 flex items-center gap-6">
                <a href="https://imdb-clone-frontend-sepia.vercel.app/" className="group px-6 py-3 rounded-full bg-white text-[#010308] text-sm font-bold hover:bg-lime-400 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:scale-105 transition-all flex items-center gap-2">
                  View Live Site 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="rounded-3xl border border-white/10 bg-[#020611] p-2 transition duration-500 group-hover:border-lime-500/50 group-hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]">
                <div className="aspect-[4/3] rounded-2xl bg-[#050A15] overflow-hidden relative">
                  <div className="absolute inset-0 bg-lime-500/20 mix-blend-overlay group-hover:opacity-0 transition duration-500 z-10"></div>
                  <img src="/download.png" alt="Project Preview" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="mb-12 max-w-6xl mx-auto">
            <h2 className={`text-3xl text-white font-bold ${spaceGrotesk.className}`}>
              Other Works.
            </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-emerald-500/40 flex flex-col justify-between h-full backdrop-blur-sm">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${project.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : "bg-white/10 text-white border border-white/20"}`}>
                    {project.status}
                  </span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    {project.tech.length} TECH
                  </span>
                </div>

                <h2 className={`text-2xl font-bold text-white group-hover:text-lime-300 transition-colors ${spaceGrotesk.className}`}>
                  {project.title}
                </h2>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-[#050A15] border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <a href={project.link} className="text-sm font-semibold text-white hover:text-emerald-400 transition flex items-center gap-2">
                  Explore <span className="group-hover:translate-x-1 transition">→</span>
                </a>
                <div className="w-10 h-10 rounded-full border border-white/10 bg-[#020611] flex items-center justify-center text-sm text-gray-400 group-hover:border-emerald-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-all">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SERVICES SECTION */}
        <div className="max-w-6xl mx-auto mt-40">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-7xl font-bold text-white leading-tight ${spaceGrotesk.className}`}>
              Engineering <br />
              <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-500 text-transparent bg-clip-text">Digital Excellence</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              End-to-end solutions. From pixel-perfect frontend interfaces to highly secure, scalable backend databases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-lime-500/5 hover:border-lime-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-lime-500/10 border border-lime-400/20 flex items-center justify-center text-lime-400 text-2xl mb-8 font-bold">✦</div>
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Frontend</h3>
              <p className="text-sm text-gray-400 leading-relaxed">React, Next.js, and Tailwind architectures built for raw speed and SEO.</p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl mb-8 font-bold">⚡</div>
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Backend</h3>
              <p className="text-sm text-gray-400 leading-relaxed">C#, .NET 8, Node.js, and complex SQL database management.</p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl mb-8 font-bold">◎</div>
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Dashboards</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Interactive data visualization and enterprise analytics using ECharts.</p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-2xl mb-8 font-bold">↗</div>
              <h3 className={`text-2xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>Scale</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Optimized queries, caching strategies, and fast loading performance.</p>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="max-w-4xl mx-auto mt-40 mb-20">
          <div className="relative overflow-hidden rounded-[3rem] border border-lime-500/20 bg-[#030A14] p-12 md:p-20 text-center shadow-[0_0_50px_rgba(52,211,153,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15),transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className={`text-4xl md:text-6xl font-bold text-white leading-tight mb-6 ${spaceGrotesk.className}`}>
                Ready to build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-500">the next big thing?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
                Let's turn your ideas into a high-performance reality.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 text-[#010308] font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:scale-105 transition-all">
                    Start a Project
                  </button>
                </Link>
                <a href="https://github.com/shravit12">
                  <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 bg-[#010308] text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-colors">
                    View GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}