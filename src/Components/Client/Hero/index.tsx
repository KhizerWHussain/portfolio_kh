"use client";
import React from "react";
import Writing from "@/Components/Server/TypeWriter";
import { motion, Variants } from "framer-motion";
import style from "../../../app/layout.module.css";
import HeroImage from "../../../../assets/images/image-reverse.png";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const textVariants: Variants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeIn",
      delay: 0.25,
    },
  },
};

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="bg-black h-screen w-screen flex flex-col md:flex-row pr-0 pl-0 md:pl-36 border-b-4 border-secondary overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full h-[50vh] md:h-full justify-center">
        <motion.div
          className="text-[40px] justify-center flex flex-col w-full h-full items-center md:items-start"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full text-[28px] md:text-[42px] flex gap-2 items-center md:items-start text-white justify-center md:justify-start">
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

      <div className={`${style.myImage} hidden md:flex`} />

      <div className="h-[50vh] w-full overflow-hidden flex md:hidden">
        <Parallax
          style={{
            width: "100%",
            height: "100%",
          }}
          speed={0}
          // translateY={[-20, 0]}
        >
          <Image
            src={HeroImage}
            alt="Khizer Hussain"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default HeroSection;
