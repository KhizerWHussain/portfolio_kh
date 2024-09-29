"use client";
import HeroSection from "@/Components/Client/Hero";
import AboutMe from "@/Components/Server/About";
import Footer from "@/Components/Server/Footer";
import Services from "@/Components/Server/Service";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutMe />
        <Services />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
