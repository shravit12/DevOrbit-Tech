import newsData from "@/data/news.json";
import finaldata from "@/data/final-data.json"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ Metadata (sync now)
export async function generateMetadata({ params }) {
  // await the params using React.use (or just async unwrap)
  const { slug } = await params; // ✅ unwrap the promise
  const news = newsData.find(n => n.slug === slug);

  if (!news) {
    return { title: "News Not Found | DevOrbit" };
  }

  return {
    title: `${news.title} | DevOrbit`,
    description: news.desc,
    openGraph: {
      title: news.title,
      description: news.desc,
      images: news.image ? [{ url: news.image }] : [],
    },
    alternates: {
      canonical: `https://www.devorbittech.in/news/${news.slug}`,
    },
  };
}

export default async function NewsDetails({ params }) {
  const { slug } = await params; // ✅ unwrap promise
  const news = newsData.find(n => n.slug === slug);
  // ✅ YAHAN DEBUG LAGAO 👇
 
const article = Array.isArray(finaldata)
  ? finaldata.find(a => String(a.id) === String(news.id))
  : String(finaldata.id) === String(news.id)
    ? finaldata
    : null;
  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">News not found ❌</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar className="bg-black" />
 <div className="min-h-screen bg-linear-to-b from-white to-gray-100 px-6 pt-45 py-5 md:py-16 ">

        {/* Back Button */}
        <Link href="/news" className="inline-flex md:pt-12 items-center gap-2 text-xl md:text-sm text-blue-500 hover:text-blue-700 transition mb-8">
          ← Back to News
        </Link>

        {/* Container */}
        <div className="max-w-4xl mx-auto">

          {/* Category Badge */}
          <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide">
            {news.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4">
            {news.title}
          </h1>

          {/* Date */}
          <p className="text-gray-500 text-sm mt-2">{news.time}</p>

          {/* Image */}
          {news.image && (
            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <img src={news.image} alt={news.title} className="w-full h-100 object-cover hover:scale-105 transition duration-500" />
            </div>
          )}

          {/* Content */}
         <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-4">
 {article?.content?.trim()
  ? article.content.split("\n\n").map((para, idx) => (
      <p key={idx}>{para}</p>
    ))
  : <p>{news.desc}</p>
}
</div>

        </div>
      </div>
      <Footer />
    </>
  );
}