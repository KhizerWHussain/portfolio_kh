"use client";
import React from "react";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/Components/Client/Hero"), {
  ssr: false,
});
const AboutMe = dynamic(() => import("@/Components/Server/About"), {
  ssr: false,
});
const Services = dynamic(() => import("@/Components/Server/Service"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/Components/Client/Contact"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/Components/Client/Portfolio"), {
  ssr: false,
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
