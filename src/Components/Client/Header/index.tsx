"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerLinksArray } from "@/Data/header";
import { Link as ScrollLink } from "react-scroll";
import MobileHeader from "./mobileHeader";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled || menuOpen ? "bg-black text-white z-50" : "bg-transparent z-0"
      } flex justify-between w-full items-center h-20 pt-12 pb-12 sticky top-0 pr-6 pl-6 md:pr-36 md:pl-36 transition-colors duration-500 overflow-hidden`}
    >
      <div className="text-lg font-bold text-[24px] w-full">
        <Link href="/">
          <span className="text-primary">K</span>
          <span>hizer Hussain.</span>
        </Link>
      </div>

      {!menuOpen ? (
        <nav className="hidden md:flex lg:flex">
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
      ) : null}

      <MobileHeader
        links={headerLinksArray}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <button onClick={toggleMenu} className="flex md:hidden z-[1000] md:z-0">
        {menuOpen ? <HiX size={32} /> : <HiMenu size={24} />}
      </button>
    </header>
  );
};

export default Header;
