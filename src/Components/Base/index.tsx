import React from "react";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/Components/Hero"), {
  ssr: true,
});
const AboutMe = dynamic(() => import("@/Components/About"), {
  ssr: true,
});
const Services = dynamic(() => import("@/Components/Service"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/Components/Contact"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/Components/Portfolio"), {
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
