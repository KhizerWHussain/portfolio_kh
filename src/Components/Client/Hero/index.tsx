"use client";
import CustomImage from "@/Components/Server/CustomImage";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import myImage from "../../../../assets/images/myimage.jpeg";
import Writing from "@/Components/Server/TypeWriter";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 2000,
      ease: "easeIn",
      delay: 0.25,
    },
  },
};

const imageVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 2000,
      ease: "easeIn",
      delay: 0.25,
    },
  },
};

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="bg-transparent h-screen w-full flex pr-0 pl-0 md:pr-36 md:pl-36 overflow-hidden border-b-4 border-secondary"
    >
      <div className="flex flex-col md:flex-row w-full h-full justify-between">
        <motion.div
          className="text-[40px] mb-8 md:mb-0 items-center align-middle justify-center flex flex-col"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <div className="text-[40px] mb-8 md:mb-0 items-center align-middle justify-center flex flex-col"> */}
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
          {/* <div>Full Stack Web Developer</div> */}
          {/* </div> */}
        </motion.div>
        {/* <div className="relative w-full md:w-1/2 overflow-hidden"> */}
        <motion.div
          className="relative w-full md:w-1/2 overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Parallax className="absolute inset-0">
            <CustomImage
              image={myImage}
              alt="Khizer"
              fetchPriority="high"
              loadingEase="eager"
              imageQuality={100}
              havePriority={true}
              optimizeImage={true}
              styles={{
                height: "100%",
                width: "100%",
              }}
            />
          </Parallax>
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
