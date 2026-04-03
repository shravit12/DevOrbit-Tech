import newsData from "@/data/news.json";
import Link from "next/link";
import Head from "next/head";
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
export async function generateMetadata({ params }) {
  const { id } = params;
  const news = newsData.find((n) => n.id === id);

  if (!news) {
    return {
      title: "News Not Found",
    };
  }

  return {
    title: `${news.title} | Shravit`,
    description: news.desc,
    openGraph: {
      title: news.title,
      description: news.desc,
      images: [
        {
          url: news.image,
        },
      ],
    },
  };
}

export default async function NewsDetails({ params }) {

  const { id } = await params; // 🔥 FIX
const canonicalUrl = `https://www.devorbittech.in/news/${news.id}`;
  const news = newsData.find((n) => n.id === id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl">News not found ❌</h1>
      </div>
    );
  }

  return (
    <>
     <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    <Navbar className="bg-black" />
   <div className="min-h-screen bg-linear-to-b from-white to-gray-100 px-6 pt-45 md:py-16">

  {/* Back Button */}
  <Link 
    href="/news" 
    className="inline-flex items-center gap-2 text-xl md:text-sm text-blue-500 hover:text-blue-700 transition mb-8"
  >
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
    <p className="text-gray-500 text-sm mt-2">
      {news.date}
    </p>

    {/* Image (important for WOW) */}
    {news.image && (
      <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-100 object-cover hover:scale-105 transition duration-500"
        />
      </div>
    )}

    {/* Content */}
    <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-4">
      <p>{news.desc}</p>
    </div>

  </div>
</div>
<Footer />
</>
  );
}
