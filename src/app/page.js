"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar  />

      <main className=" bg-black backdrop-blur-xl text-white min-h-screen pt-44 ">
        
        <HeroSection />

        <section className="py-0 md:py-0 md:pt-60  px-0">
          <About />
        </section>

        <section className="py-20 px-10 bg-zinc-900">
          <Features />
        </section>

        <section className="py-4 px-10 bg-white">
          <Portfolio />
        </section>

        <section className="py-0 px-0 bg-zinc-900 text-center">
          <Footer />
        </section>
      </main>
    </>
  );
}