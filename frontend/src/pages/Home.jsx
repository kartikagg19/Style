import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickPeek from "../components/QuickPeek";
import Story from "../components/Story";
import Menu from "../components/Menu";
import Studio from "../components/Studio";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileBar from "../components/MobileBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--es-cream)] text-[var(--es-ink)]">
      <Navbar />
      <Hero />
      <QuickPeek />
      <Story />
      <Menu />
      <Studio />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <MobileBar />
    </main>
  );
}
