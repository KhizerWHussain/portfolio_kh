"use client";
import { aboutPropertiesLinks } from "@/Data/header";
import React, { useEffect, useRef } from "react";
import Properties from "./properties";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("./profile"));
const Tabber = dynamic(() => import("./tabber"));
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { x: 500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeIn",
      delay: 0.25,
    },
  },
};

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
      className="flex pl-0 pr-0 md:pl-36 md:pr-36 bg-white text-for w-full h-full justify-center align-middle pt-32 pb-32 z-10"
      ref={ref}
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full align-middle justify-center mb-8">
          <h1 className="font-bold text-[44px] underline text-gray-800">
            About Me
          </h1>
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex flex-col md:flex-row w-full justify-between h-[90vh] md:h-full">
            {aboutPropertiesLinks.map((item: any, i: number) => (
              <Properties key={i} item={item} />
            ))}
          </div>
        </motion.div>
        <div className="flex w-full justify-between align-middle mt-20 h-[100vh] md:h-full flex-col md:flex-row">
          <Profile />
          <Tabber />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
