import blogs from "@/data/blog";
import Navbar from  '@/components/Navbar'
import Footer from '@/components/Footer'
export default async function BlogDetails({ params }) {
  const { id } = await params; // ✅ FIX

  const blog = blogs.find((b) => String(b.id) === String(id));
  console.log("PARAM ID:", id);
console.log("BLOG IDS:", blogs.map(b => b.id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>Blog not found ❌</h1>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white px-6 py-60">
      
      <div className="max-w-3xl mx-auto space-y-8">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {blog.title}
        </h1>

        {/* META */}
        <div className="flex justify-between text-sm text-zinc-400">
          <span>{blog.date}</span>
          <span>5 min read</span>
        </div>

        {/* LINE */}
        <div className="h-px bg-white/10"></div>

        {/* CONTENT */}
        <div className="text-lg leading-8 text-zinc-300 whitespace-pre-line">
          {blog.content}
        </div>

      </div>

    </div>
    <Footer />
    </>
  );
}