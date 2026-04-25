import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
const projects = [
 
  {
    slug: "practice-projects",
    title: "Practice Projects",
    desc: "Small practice projects built while learning frontend development.",
    details:
      "These include UI challenges from Frontend Mentor, component practice, and API integration projects.",
  }
];
const practiceCards = [
  {
    id: 1,
    title: "Typing Speed Test App with Real-Time Results & Accuracy",
    link: " https://www.frontendmentor.io/solutions/typing-speed-test-app-with-real-time-results-and-accuracy-ozHaEyWFa8",
    demo: "https://github.com/shravit12/Typing_speed_tester.git"
  },
  {
    id: 2,
    title: "Extension_manager",
    link: "https://www.frontendmentor.io/solutions/extensionmanager-Czu_fMxb2k",
    demo: "https://github.com/shravit12/extension-manager.git"
  }
];


export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-20 text-white">
        Project not found
      </div>
    );
  }

  return (
    <>
   <div className="max-w-4xl mx-auto px-6 py-20 text-white space-y-10">

  {/* BACK BUTTON */}
  <div className="mb-4">
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-black/40 transition"
    >
      ← Back to Portfolio
    </Link>
  </div>

  {/* CARD */}
  <div className="bg-zinc-900 border border-white/10 rounded-2xl p-10 space-y-6 shadow-lg cursor-default">

    {/* TITLE */}
    <h1 className="text-4xl font-bold ">
      {project.title}
    </h1>

    {/* DESCRIPTION */}
    <p className="text-zinc-400 text-lg">
      {project.desc}
    </p>

    {/* DIVIDER */}
    <div className="h-px bg-white/10" />

    {/* DETAILS */}
    <p className="text-zinc-300 leading-relaxed">
      {project.details}
    </p>

  </div>
</div>


  <div className="space-y-8 px-19">

  {/* HEADER */}
  <div className="space-y-2 cursor-default">
    <h2 className="text-3xl font-bold text-black/20  ">
      Frontend Mentor Projects
    </h2>
    <p className="text-zinc-400 text-sm">
      Small UI challenges and practice builds while learning frontend development
    </p>
  </div>

  {/* GRID */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {practiceCards.map((card) => (
    <div
      key={card.id}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 p-6 transition-all duration-300 hover:border-white/30  hover:shadow-2xl"
    >

      {/* glow line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-purple-500 to-blue-500 opacity-30 group-hover:opacity-100 transition" />

      {/* content */}
      <div className="space-y-4 flex flex-col h-full">

        {/* TITLE */}
        <div className="flex items-start justify-between">
          <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition cursor-default">
            {card.title}
          </h3>
          <span className="text-zinc-500 group-hover:text-white transition">↗</span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">

          {/* CODE BUTTON */}
          <a
            href={card.demo || "#"}
            target="_blank"
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition"
          >
            <Code2 size={16} />
            Code
          </a>

          {/* LIVE BUTTON */}
          <a
            href={card.link}
            target="_blank"
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:text-white transition"
          >
            <ExternalLink size={16} />
            Live
          </a>

        </div>

        {/* TAG */}
        <div className="mt-auto pt-3">
          <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10 cursor-default">
            Frontend Practice
          </span>
        </div>

      </div>
    </div>
  ))}

</div>
</div>
      </>
  );
}