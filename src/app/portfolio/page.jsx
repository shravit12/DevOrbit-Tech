"use client";

import Link from "next/link";
const projectsData = [
  {
    id: 1,
    title: "Medical Clinic website",
    description:
      "Website for Doctors and Clinicals websites style ",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://med-clinic-one.vercel.app/",
    status: "Completed",
  },
  {
    id: 2,
    title: "Slow Scroller Web page ",
    description:
      "Fella Website for slow scroller website .",
    tech: ["React.js", "AI", "Tailwind"],
    link: "https://fella-web.vercel.app/",
    status: "Completed",
  },
  {
    id: 3,
    title: "Search Image API  APP",
    description:
      "Real-timeAPI Image Generater From API .",
    tech: ["React", "tailwind", "API"],
    link: "https://search-image-app-frontend.vercel.app/",
    status: "Completed",
  },
  {
    id: 4,
    title: "Extension Manager",
    description:
      "Frontend Mentor / UI of Extension manager",
    tech: ["React", "tailwind", "data"],
    link: "https://extension-manager-beta.vercel.app/",
    status: "Completed",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 py-14 font-sans relative overflow-hidden">

      {/* BACKGROUND */}
     {/* BASE DARK SURFACE */}
<div className="absolute inset-0 -z-10 bg-[#0A0C10]" />

{/* SOFT GRID (VERY SUBTLE) */}
<div className="absolute inset-0 -z-10 opacity-[0.35]
  bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
  bg-size-[40px_40px]" />

{/* TOP LIGHT SHEEN */}
<div className="absolute -top-50 left-1/2 -translate-x-1/2 w-175 h-175
  bg-linear-to-b from-cyan-500/10 via-transparent to-transparent blur-[120px] -z-10" />

{/* LEFT SOFT GLOW */}
<div className="absolute top-1/3 -left-37.5 w-100 h-100
  bg-blue-500 rounded-full blur-[140px] -z-10 animate-float" />
{/* RIGHT SOFT GLOW */}
<div className="absolute bottom-1/4 -right-37.5 w-112.5 h-112.5
  bg-purple-500 rounded-full blur-[140px] -z-10 animate-floatSlow" />
{/* CENTER DEPTH LAYER */}
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      {/* CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14 relative">

  {/* subtle badge */}
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 backdrop-blur-md mb-5">
    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
    Available for freelance • Building modern web apps
  </div>

  {/* name / identity */}
  <h2 className="text-sm tracking-[0.25em] text-gray-400 uppercase">
    Designer • Developer • Builder
  </h2>

  {/* main title */}
  <h1 className="mt-3 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
    <span className="text-white">Hi, I'm </span>
    <span className="bg-linear-to-r from-cyan-400 via-white to-purple-400 text-transparent bg-clip-text">
      Shravit
    </span>
  </h1>

  {/* underline accent */}
  <div className="w-20 h-0.5 bg-linear-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full opacity-80" />

  {/* subtitle */}
  <p className="mt-6 text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
    I craft clean, scalable and high-performance web experiences using modern technologies.
    Focused on simplicity, speed and user experience.
  </p>

  {/* CTA hint */}
  <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
    <span>React</span>
    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
    <span>Next.js</span>
    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
    <span>Node.js</span>
  </div>

</div>
{/* Featured Card */}
<div className="max-w-6xl mx-auto mb-24">

  {/* label */}
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-sm text-gray-500 uppercase tracking-widest">
      Featured Project
    </h2>
    <span className="text-xs text-gray-600">Case Study</span>
  </div>

  {/* main layout */}
  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
        IMDB Frontend Clone
      </h3>

      <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
        Built a responsive IMDb clone that displays movies, ratings, and details using API integration, with modern UI and smooth user experience
      </p>

      {/* tech */}
      <div className="mt-5 flex flex-wrap gap-2">
        {["React", "tailwind", "Vite"].map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4">
        <a
          href="https://imdb-clone-frontend-sepia.vercel.app/"
          className="text-sm font-medium text-white hover:text-cyan-300 transition"
        >
          View Project →
        </a>

        <span className="text-xs text-gray-500">Live Demo</span>
      </div>

    </div>

    {/* RIGHT VISUAL */}
    <div className="relative">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
    
    <div className="h-56 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 overflow-hidden">
      <img
        src="/download.png"
        alt="Project Preview"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  {/* subtle glow */}
  <div className="absolute -z-10 inset-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10 blur-2xl" />
</div>

  </div>

</div>


        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

         {projectsData.map((project) => (
  <div
    key={project.id}
    className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
  >

    {/* glow edge effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />

    {/* top accent line */}
    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-60" />

    {/* header */}
    <div className="flex items-center justify-between">

      <span
        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide ${
          project.status === "Completed"
            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20"
            : "bg-amber-500/20 text-amber-300 border border-amber-500/20"
        }`}
      >
        {project.status}
      </span>

      <span className="text-[10px] text-gray-500 uppercase tracking-widest">
        {project.tech.length} STACK
      </span>

    </div>

    {/* title */}
    <h2 className="mt-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition">
      {project.title}
    </h2>

    {/* description */}
    <p className="mt-2 text-xs text-gray-400 leading-relaxed">
      {project.description}
    </p>

    {/* tech */}
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tech.map((t, i) => (
        <span
          key={i}
          className="text-[10px] px-2.5 py-1 rounded-md bg-white/10 text-gray-300 border border-white/5"
        >
          {t}
        </span>
      ))}
    </div>

    {/* footer */}
    <div className="mt-5 flex items-center justify-between">

      <a
        href={project.link}
        className="text-xs font-medium text-white hover:text-cyan-300 transition flex items-center gap-1"
      >
        Open Project
        <span className="group-hover:translate-x-1 transition">→</span>
      </a>

      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
        ↗
      </div>

    </div>

  </div>
))}
        </div>


{/* GALLERY  */}
       <div className="max-w-6xl mx-auto mt-32">

  {/* heading */}
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-semibold text-white">
      Selected Work
    </h2>
    <p className="text-gray-400 mt-2">
      Real projects. Real impact.
    </p>
  </div>

  {/* layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* BIG LEFT */}
    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl">

      <img
        src="/download.png"
        className="w-full aspect-16/10 object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-6">

        <div>
          <h3 className="text-white text-xl font-semibold">
            IMDB Clone 
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            frontend only
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT STACK */}
    <div className="flex flex-col gap-6">

      {/* top */}
      <div className="group relative overflow-hidden rounded-3xl">

        <img
          src="/s_v2.webp"
          className="w-full h-50 object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
          <span className="text-white text-sm">Slide Slow</span>
        </div>

      </div>

      {/* bottom */}
      <div className="group relative overflow-hidden rounded-3xl">

        <img
          src="/s_v3.webp"
          className="w-full h-50 object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
          <span className="text-white text-sm">Speed Tester</span>
        </div>

      </div>

    </div>

  </div>

  {/* bottom row */}
  <div className="grid md:grid-cols-3 gap-6 mt-6">

    {["/s_v4.webp", "/s_v5.webp", "/s_v6.webp"].map((img, i) => (
      <div
        key={i}
        className="group relative overflow-hidden rounded-3xl"
      >

        <img
          src={img}
          className="w-full h-50 object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
          <span className="text-white text-sm">Project</span>
        </div>

      </div>
    ))}

  </div>

</div>
<div className="flex justify-center mt-12">
  <Link href="/gallery">
  <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white hover:text-black transition duration-300">
    View All
  </button>
</Link>
</div>
{/* What I DO  */}
        <div className="max-w-5xl mx-auto mt-28">

  {/* heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold text-white">
      What I Solve
    </h2>
    <p className="text-gray-400 mt-3">
      I build solutions that actually matter.
    </p>
  </div>

  {/* grid */}
  <div className="grid md:grid-cols-3 gap-6">

    {/* card 1 */}
    <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition">

      <h3 className="text-white font-medium text-lg">
        Slow Websites
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Optimized performance using modern frameworks and best practices.
      </p>

      <div className="mt-4 text-xs text-cyan-400">
        → Fast loading & smooth UX
      </div>

    </div>

    {/* card 2 */}
    <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition">

      <h3 className="text-white font-medium text-lg">
        Messy Codebases
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Clean architecture and scalable structure for long-term growth.
      </p>

      <div className="mt-4 text-xs text-purple-400">
        → Maintainable & scalable code
      </div>

    </div>

    {/* card 3 */}
    <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition">

      <h3 className="text-white font-medium text-lg">
        Low Conversion
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        UI/UX improvements focused on engagement and conversions.
      </p>

      <div className="mt-4 text-xs text-pink-400">
        → Better user experience
      </div>

    </div>

  </div>

</div>

{/* CTA */}
        <div className="max-w-5xl mx-auto mt-32">

  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

    {/* glow background */}
    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />

    {/* soft spotlight */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-100 h-100 bg-cyan-500/10 rounded-full blur-[120px]" />

    {/* content */}
    <div className="relative">

      {/* heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
        Let’s build something 
        <span className="bg-linear-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text"> great together</span>
      </h2>

      {/* subtitle */}
      <p className="mt-4 text-gray-400 max-w-lg mx-auto">
        I help turn ideas into scalable, high-performance web products.
      </p>

      {/* buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

        <button className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-purple-500 text-black font-medium hover:scale-105 transition">
          Start a Project
        </button>

        <button className="px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition">
          View Work
        </button>

      </div>

    </div>

  </div>

</div>

      </div>
    </div>
  );
}