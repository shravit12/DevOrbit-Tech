import blogs from "@/data/blogs.json";
import Navbar from  '@/components/Navbar'
import ReactMarkdown from "react-markdown";
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ IMPORTANT FIX

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "Blog does not exist",
    };
  }

  return {
    title: blog.name,
    description: blog.description,
  };
}

export default async function BlogDetails({ params }) {
  const resolvedParams = await params; // <- await
  const { slug } = resolvedParams || {};

  // ✅ Blog find karo slug ke basis pe
  const blog = blogs.find((b) => String(b.slug) === String(slug));

  // ✅ Safe check
  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>Blog not found ❌</h1>
      </div>
    );
  }
  


  return (
    <>
    <Navbar className="bg-black"/>
    <div className="min-h-screen bg-white/90 text-black px-6 py-60">
      
      <div className="max-w-3xl mx-auto space-y-8">

        {/* TITLE */}
        <h1 className="text-4xl md:text-3xl font-bold leading-tight">
          {blog.title}
        </h1>

        {/* META */}
        <div className="flex justify-between text-sm text-zinc-400">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          
        </div>

        {/* LINE */}
        <div className="h-12px bg-black/10"></div>

        {/* CONTENT */}
        <div className="text-lg leading-9 text-zinc-700 bg-zinc-90 whitespace-pre-line">
          <ReactMarkdown
  components={{
    h1: ({node, ...props}) => <h1 className="text-5xl font-bold my-4" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-5xl font-bold my-3" {...props} />,
    p: ({node, ...props}) => <p className="my-2" {...props} />,
    li: ({node, ...props}) => <li className="ml-6 list-disc" {...props} />,
    strong: ({node, ...props}) => <strong className="font-bold text-2xl" {...props} />,
    em: ({node, ...props}) => <em className="italic" {...props} />,
  }}
>
  {blog.content}
</ReactMarkdown>
        </div>

      </div>

    </div>
    <Footer />
    </>
  );
}