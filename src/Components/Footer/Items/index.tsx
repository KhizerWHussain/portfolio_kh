"use client";
import React from "react";
import Link from "next/link";
import { footerDataArray } from "@/data/header";
import { motion } from "framer-motion";

function FooterItems() {
  return (
    <>
      {footerDataArray.map((item: any, i: number) => (
        <motion.div
          key={i}
          initial={{ y: 50, opacity: 0, scale: 0.75 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.25, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Link
            href={item.link}
            target="_blank"
            className="relative flex cursor-pointer bg-gray-600 text-center items-center justify-center w-12 h-12 rounded-md transition-all duration-500 group overflow-hidden hover:bg-secondary"
          >
            {/* Initial icon */}
            <span className="absolute text-white text-xl transition-transform duration-500 transform group-hover:-translate-y-80">
              {item.icon}
            </span>

            {/* Hover icon */}
            <span className="absolute text-xl transition-transform duration-500 transform translate-y-80 group-hover:translate-y-0 ">
              {item.icon}
            </span>
          </Link>
        </motion.div>
      ))}
    </>
  );
}

export default FooterItems;
