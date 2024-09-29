"use client";
// import CustomImage from "@/Components/Server/CustomImage";
import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
// import myImage from "../../../../assets/images/myimage.jpeg";
import Writing from "@/Components/Server/TypeWriter";
import { motion } from "framer-motion";
import style from "../../../app/layout.module.css";

const textVariants = {
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
    <ParallaxProvider>
      <div
        id="hero"
        className="bg-transparent h-screen w-full flex pr-0 pl-0 md:pl-36 overflow-x-hidden border-b-4 border-secondary"
      >
        <div className="flex flex-col md:flex-row w-full h-full justify-between">
          <motion.div
            className="text-[40px] mb-8 md:mb-0 items-center align-middle justify-center flex flex-col"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              Hello, I am <span className="text-primary">Khizer Hussain</span>
            </div>
            <Writing
              runInLoop={true}
              useCursor={true}
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Web Developer",
              ]}
            />
          </motion.div>
          <div className={`${style.myImage}`} />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default HeroSection;
