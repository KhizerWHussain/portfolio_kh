"use client";
import { servicesDataArray } from "@/Data/header";
import React, { useEffect, useRef } from "react";
import CustomImage from "../CustomImage";
import { motion, useAnimation, useInView } from "framer-motion";

const skillVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 2,
      delay: 0.25,
    },
  },
};

const Services = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="services" className="py-20 bg-gray-100" ref={ref}>
      <div className="container mx-auto text-center">
        <h1 className="font-bold text-[44px] underline text-gray-800">
          Services
        </h1>
        <motion.div
          variants={skillVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap align-middle justify-center w-full"
        >
          {servicesDataArray.map((service: any, i: number) => (
            <div
              key={i}
              className="bg-white shadow-lg group rounded-lg p-6 m-4 w-full md:w-[30%] transition-transform duration-300 transform hover:scale-105 hover:bg-secondary hover:text-white cursor-pointer flex flex-col justify-between align-middle"
            >
              <div className="relative flex items-center justify-center h-24 w-full mb-4">
                <CustomImage
                  image={service.icon}
                  alt={service.title}
                  height={80}
                  width={80}
                  className="max-w-full max-h-full object-contain text-center"
                  loadingEase="lazy"
                  havePriority={false}
                  optimizeImage={true}
                />
              </div>
              <div className="flex flex-col gap-0">
                <h3 className="text-xl font-semibold mb-4 text-gray-500 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
