import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function WhyDeveloper() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-6 py-29 space-y-25">

        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-linear-to-r from-white to-purple-500 text-transparent bg-clip-text">
            Why Your Business Needs a Web Developer 
          </h1>
          <p className="text-zinc-400 text-lg">
            In today’s digital world, your website is your identity.  
            A powerful developer can turn your ideas into a high-performing business.
          </p>
        </section>

        {/* IMPORTANCE */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          
          {[
            {
              title: "First Impression Matters",
              desc: "Your website is the first thing clients see. A modern UI builds trust instantly.",
            },
            {
              title: "Speed = Money",
              desc: "Fast websites convert more users and rank higher on Google.",
            },
            {
              title: "Automation & Growth",
              desc: "Web apps can automate your business and save hours of manual work.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white hover:bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}

        </section>

        {/* SERVICES */}
        <section className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center text-blue-400">
            What I Offer 💼
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Custom Website Development",
              "Landing Pages (High Conversion)",
              "E-commerce Websites",
              "Website Optimization (Speed + SEO)",
              "Bug Fixing & Maintenance",
              "Full Stack Web Apps",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-4xl border lg:text-white/10 hover:text-white border-white/20 rounded-xl p-4"
              >
                 {service}
              </div>
              
            ))}
          </div>
        </section>

        {/* SKILLS & TOOLS */}
        <section className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center text-purple-400">
            My Skills & Tools ⚡
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git & GitHub",
              "API Integration",
              "Automation Scripts",
            ].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* WHY ME */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">
            Why Choose Me? 🔥
          </h2>

          <p className="text-zinc-400">
            I don’t just build websites — I build solutions.  
            I focus on performance, clean UI, and real business results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              "Fast Delivery ⚡",
              "Modern UI/UX 🎨",
              "SEO Friendly 🚀",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Let’s Build Something Amazing Together 🚀
          </h2>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Contact Me
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}