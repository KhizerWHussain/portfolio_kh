"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerLinksArray } from "@/Data/header";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-black text-white z-50" : "bg-transparent"
      } flex justify-between items-center h-20 pt-12 pb-12 sticky top-0 pr-36 pl-36 transition-colors duration-500`}
    >
      <div className="text-lg font-bold text-[24px]">
        <Link href="/">
          <span className="text-primary">K</span>
          <span>hizer Hussain.</span>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 gap-4">
          {headerLinksArray.map((link: any, i: number) => (
            <ScrollLink
              to={link.to}
              key={link.id + i}
              className="hover:text-primary transition duration-500 text-[20px]"
              smooth={true}
              duration={500}
            >
              {link.text}
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
