import blogs from "@/data/blogs.json";
import Navbar from '@/components/Navbar';
import ReactMarkdown from "react-markdown";
import Footer from '@/components/Footer';
import ScrollToTop from "@/components/ScrollTop";
import { Space_Grotesk, Outfit } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | DevOrbit",
      description: "Blog does not exist",
    };
  }

  return {
    title: `${blog.title || blog.name} | DevOrbit Tech Blog`,
    description: blog.desc || "Read the latest article on DevOrbit.",
  };
}

export default async function BlogDetails({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams || {};

  const blog = blogs.find((b) => String(b.slug) === String(slug));

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className={`text-3xl font-bold mb-3 ${spaceGrotesk.className}`}>Blog not found ❌</h1>
        <p className="text-gray-400 text-sm mb-6">The article you are looking for doesn't exist or has been moved.</p>
        <a href="/blogs" className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-sm hover:scale-105 transition shadow-lg shadow-orange-500/25">
          Back to Blogs
        </a>
      </div>
    );
  }

  return (
    <>
      {/* PURE LUXURY DARK BACKGROUND (#030303) */}
      <div className={`min-h-screen bg-[#030303] text-white px-5 py-24 md:py-36 relative overflow-x-hidden ${outfit.className}`}>
        
        {/* 🌌 AMBER & AMETHYST AMBIENT GLOWS */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-orange-500/15 via-purple-600/10 to-transparent blur-[160px]" />
          <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-2/3 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px]" />
        </div>

        <Navbar />

        <article className="max-w-3xl mx-auto pt-4 relative">
          
          {/* NAVIGATION & CATEGORY BADGE */}
          <div className="flex items-center justify-between mb-8 px-2">
            <a href="/blogs" className="group text-xs text-gray-400 hover:text-amber-400 transition flex items-center gap-2 font-medium">
              <span className="group-hover:-translate-x-1 transition-transform text-amber-400">←</span> Back to Articles
            </a>
            <span className="text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-300 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              {blog.category || "Engineering"}
            </span>
          </div>

          {/* LUXURY HERO HEADER CARD */}
          <div className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-500/10 pointer-events-none opacity-80 group-hover:opacity-130 transition duration-700" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-purple-500 shadow-[0_0_20px_rgba(245,158,11,0.8)]" />

            {/* TITLE */}
            <h1 className={`text-3xl sm:text-4xl md:text-[3.2rem] font-extrabold tracking-tight text-white leading-[1.18] ${spaceGrotesk.className}`}>
              {blog.title || blog.name}
            </h1>

            {/* META INFO BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-purple-600 p-[2px] shadow-xl shadow-amber-500/20">
                  <div className="w-full h-full rounded-[14px] bg-[#030303] flex items-center justify-center text-amber-300 font-extrabold text-sm">
                    S
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold tracking-wide text-sm">Shravit Sharma</p>
                  <p className="text-[11px] text-amber-400 font-medium">DevOrbit Tech Studio</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 font-medium bg-black/50 px-4 py-2 rounded-2xl border border-white/10">
                <span>📅 {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span className="text-white/20">|</span>
                <span className="text-amber-300">⚡ 4 min read</span>
              </div>
            </div>
          </div>

          {/* MARKDOWN CONTENT CONTAINER WITH PREMIUM STYLING */}
          <div className="mt-16 text-gray-300 text-base sm:text-lg leading-relaxed space-y-6 px-2">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className={`text-2xl sm:text-3xl font-bold text-white mt-16 mb-5 tracking-tight border-b border-white/10 pb-3 ${spaceGrotesk.className}`} {...props} />,
                h2: ({node, ...props}) => <h2 className={`text-xl sm:text-2xl font-bold text-amber-300 mt-14 mb-4 tracking-tight flex items-center gap-2 ${spaceGrotesk.className}`} {...props} />,
                h3: ({node, ...props}) => <h3 className={`text-lg font-semibold text-white mt-10 mb-3 ${spaceGrotesk.className}`} {...props} />,
                p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed my-6 font-light" {...props} />,
                ul: ({node, ...props}) => <ul className="my-6 space-y-3 list-disc pl-5 text-gray-300 marker:text-amber-400" {...props} />,
                ol: ({node, ...props}) => <ol className="my-6 space-y-3 list-decimal pl-5 text-gray-300 marker:text-purple-400" {...props} />,
                li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
                strong: ({node, ...props}) => <strong className="font-semibold text-white bg-amber-500/10 px-2 py-0.5 rounded text-sm border border-amber-500/20 text-amber-200" {...props} />,
                em: ({node, ...props}) => <em className="italic text-purple-300" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-amber-400 pl-6 italic my-10 text-gray-200 bg-gradient-to-r from-amber-500/15 via-purple-600/10 to-transparent py-6 pr-6 rounded-r-3xl border-y border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.6)]" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline ? (
                    <code className="bg-white/10 px-2 py-0.5 rounded text-sm text-amber-300 font-mono border border-white/10" {...props} />
                  ) : (
                    <code className="block bg-[#08050A] border border-white/15 p-6 rounded-[2rem] overflow-x-auto text-sm text-amber-300 font-mono my-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]" {...props} />
                  ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* ELITE CTA FOOTER CARD */}
          <div className="mt-28 p-8 md:p-12 rounded-[2.5rem] border border-amber-500/30 bg-gradient-to-br from-amber-950/30 via-[#060408] to-purple-950/45 backdrop-blur-3xl flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[0_30px_70px_rgba(245,158,11,0.12)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)] pointer-events-none" />
            
            <div className="space-y-2 text-center sm:text-left relative z-10">
              <h3 className={`text-2xl font-extrabold text-white ${spaceGrotesk.className}`}>Ready to engineer the future?</h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-sm">Let’s collaborate on high-performance web applications and scalable systems.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3.5 relative z-10 w-full sm:w-auto">
              <a href="/contact" className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition shadow-xl shadow-amber-500/30 text-center">
                Start a Project 🚀
              </a>
              <a href="/blogs" className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition text-center">
                All Articles
              </a>
            </div>
          </div>

        </article>

      </div>
      
      <ScrollToTop />
      <Footer />
    </>
  );
}