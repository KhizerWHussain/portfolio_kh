import React from "react";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/Components/Client/Hero"), {
  ssr: true,
});
const AboutMe = dynamic(() => import("@/Components/Server/About"), {
  ssr: true,
});
const Services = dynamic(() => import("@/Components/Server/Service"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/Components/Client/Contact"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/Components/Client/Portfolio"), {
  ssr: true,
});

const Base = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Base;
