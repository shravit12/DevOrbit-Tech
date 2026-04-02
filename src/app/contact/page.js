import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function HireMe() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-6 py-40 space-y-20">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Let’s Work Together 🚀
          </h1>
          <p className="text-zinc-400 text-lg">
            I help businesses build fast, modern, and scalable websites.
            Let’s turn your idea into reality.
          </p>
        </section>

        {/* SERVICES */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
            What You Can Hire Me For 💼
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Custom Website Development",
              "Landing Pages (High Conversion)",
              "E-commerce Stores",
              "Bug Fixing & Optimization",
              "Full Stack Web Apps",
              "Website Redesign",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">
            How We Work 🤝
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "1. Discuss Idea 💡",
              "2. Plan & Design 🎨",
              "3. Develop ⚡",
              "4. Deliver 🚀",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-6"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold text-blue-400">
            Contact Me 📩
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-3xl">

            <a
              href="mailto:sharmashravit@gmail.com"
              className="hover:text-blue-400"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/918219186568"
              target="_blank"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white"
            >
              <FaGithub />
            </a>

          </div>
        </section>

        {/* FREELANCE PLATFORMS */}
        <section className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-purple-400">
            Hire Me on Platforms 🌍
          </h2>

          <div className="flex flex-wrap justify-between gap-2">

            <a
              href="https://www.fiverr.com/"
              target="_blank"
              className="px-7 py-3 bg-green-600 rounded-xl hover:scale-105 transition"
            >
              Fiverr
            </a>

            <a
              href="https://www.upwork.com/"
              target="_blank"
              className="px-7 py-3 bg-blue-600 rounded-xl hover:scale-105 transition"
            >
              Upwork
            </a>

            <a
              href="https://www.freelancer.com/"
              target="_blank"
              className="px-7 py-3 bg-purple-600 rounded-xl hover:scale-105 transition"
            >
              Freelancer
            </a>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to Start Your Project? 🚀
          </h2>

          <a
            href="mailto:sharmashravit@gmail.com"
            className="inline-block px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send Mail
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}