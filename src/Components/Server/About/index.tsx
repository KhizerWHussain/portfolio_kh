"use client";
import { aboutPropertiesLinks } from "@/Data/header";
import React, { useEffect, useRef } from "react";
import Properties from "./properties";
import Profile from "./profile";
import Tabber from "./tabber";
import { useAnimation, useInView } from "framer-motion";

const AboutMe = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      id="about"
      className="flex pl-36 pr-36 bg-white text-for w-full h-full justify-center align-middle pt-32 pb-32"
      ref={ref}
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full align-middle justify-center mb-8">
          <h1 className="font-bold text-[44px] underline text-gray-800">
            About Me
          </h1>
        </div>
        <div className="flex w-full justify-between">
          {aboutPropertiesLinks.map((item: any, i: number) => (
            <Properties key={i} item={item} controls={controls} />
          ))}
        </div>
        <div className="flex flex-1 justify-between align-middle mt-16 h-full">
          <Profile />
          <Tabber />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
