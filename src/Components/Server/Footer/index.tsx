import { footerDataArray } from "@/Data/header";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white h-32 w-full justify-between align-middle flex items-center overflow-hidden flex-col py-4">
      <div className="flex flex-1 justify-between items-center gap-6">
        {footerDataArray.map((item: any, i: number) => (
          <Link
            key={i}
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
        ))}
      </div>
      <div className="text-gray-400 font-thin text-[14px]">
        Khizer Hussain <span className="text-primary">&#64; 2024</span>
      </div>
    </div>
  );
};

export default Footer;
