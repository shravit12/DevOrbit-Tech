import "./globals.css";

export const metadata = {
  title: {
    default: "DevOrbit Tech – AI Driven Web & Automation Studio",
    template: "%s | DevOrbit Tech",
  },

  description:
    "DevOrbit Tech builds AI-powered websites and automation systems. We create fast, scalable, and SEO-friendly web solutions using Next.js, React, and modern technologies.",

  keywords: [
    "DevOrbit Tech",
    "web developer",
    "freelance web developer",
    "Next.js developer",
    "React developer",
    "AI automation",
    "automation systems",
    "website development",
    "SEO websites",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "Node.js developer",
    "business website",
    "landing page developer",
  ],

  authors: [{ name: "Shravit Sharma" }],
  creator: "Shravit",

  metadataBase: new URL("https://www.devorbittech.in"),

  openGraph: {
    title: "DevOrbit Tech – AI & Automation Web Solutions 🚀",
    description:
      "Build fast, modern, and AI-powered websites with DevOrbit Tech. Automate your business and grow faster.",
    url: "https://www.devorbittech.in",
    siteName: "DevOrbit Tech",
    images: [
      {
        url: "/og-image.png", // 👉 apni image daalna yaha
        width: 1200,
        height: 630,
        alt: "DevOrbit Tech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevOrbit Tech – AI & Automation 🚀",
    description:
      "AI-powered websites & automation systems to grow your business.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
icons: {
  icon: [
    { url: "/logo.ico", sizes: "16x16", type: "image/x-icon" },
    { url: "/logo.ico", sizes: "32x32", type: "image/x-icon" },
    { url: "/logo.ico", sizes: "48x48", type: "image/x-icon" },
  ],
}};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
   {/* Google Tag Manager */}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KWXMF6GJ');</script>
<!-- End Google Tag Manager -->
    </head>
    
      <body className="bg-black text-white font-sans">
    {/* noscript part */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWXMF6GJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        {children}
      </body>
    </html>
  );
}
