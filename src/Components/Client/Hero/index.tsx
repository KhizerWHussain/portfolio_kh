"use client";
import React from "react";
import Writing from "@/Components/Server/TypeWriter";
import { motion, Variants } from "framer-motion";
import style from "../../../app/layout.module.css";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import ReverseImage from "../../../../assets/images/image-reverse.png";

const textVariants: Variants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
      delay: 0.25,
    },
  },
};

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="bg-black h-screen w-screen flex pr-0 pl-0 md:pl-36 border-b-4 border-secondary"
    >
      <div className="flex flex-col md:flex-row w-full h-full justify-between">
        <motion.div
          className="text-[40px] mb-8 md:mb-0 justify-center flex flex-col w-full h-full items-start"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full text-[28px] md:text-[42px] flex gap-2 items-start text-white">
            <span>Hello, I am </span>
            <span className="text-primary">Khizer Hussain</span>
          </div>
          <div className="w-full text-[28px] md:text-[42px] flex justify-center md:justify-start text-white">
            <Writing
              runInLoop={true}
              useCursor={true}
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Web Developer",
              ]}
            />
          </div>
        </motion.div>
      </div>
      <div className={`${style.myImage}`} />
      {/* <div className="w-full h-full overflow-hidden relative">
        <ParallaxBanner
          suppressHydrationWarning={true}
          layers={[
            {
              image: ReverseImage.src,
              speed: 0,
              // translateY: [0, 200],
              expanded: false,
              // opacity: [1, 0.3],
            },
          ]}
          className="h-screen w-full flex items-center justify-center"
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
