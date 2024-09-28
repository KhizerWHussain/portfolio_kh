import { footerDataArray } from "@/Data/header";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white h-32 w-full justify-between align-middle flex items-center overflow-hidden flex-col mt-4">
      <div className="flex flex-1 justify-between items-center gap-6">
        {footerDataArray.map((item: any, i: number) => (
          <Link
            key={i}
            href={item.link}
            target="_blank"
            className="flex cursor-pointer bg-gray-600 align-middle justify-between text-center items-center p-4 w-14 h-14 rounded-md hover:bg-secondary"
          >
            <div className="justify-center align-middle items-center text-center">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
      <div className="text-gray-400 font-thin text-[14px] mb-4">
        Khizer Hussain <span className="text-primary">&#64; 2024</span>
      </div>
    </div>
  );
};

export default Footer;
