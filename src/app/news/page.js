import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsClient from "./NewsClient";

export const metadata = {
  title: "DevOrbit News | Latest News Today",
  description:
    "DevOrbit News: Get latest breaking news, trending updates and top stories from all categories.",
  keywords: [
    "DevOrbit News",
    "latest news",
    "breaking news",
    "india news",
    "tech news",
  ],
  openGraph: {
    title: "DevOrbit News",
    description: "Latest breaking news and trending updates",
    url: "https://www.devorbittech.in/news",
    siteName: "DevOrbit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Navbar className="bg-black" />
      <NewsClient />
      <Footer />
    </>
  );
}