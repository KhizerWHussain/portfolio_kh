"use client";
import React, { useState, useLayoutEffect } from "react";
import { headerLinksArray } from "@/Data/header";
import { Link } from "react-scroll";
import MobileHeader from "./mobileHeader";
import { HiMenu, HiX } from "react-icons/hi";
import HeaderName from "./headerName";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
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
        scrolled || menuOpen
          ? "bg-black z-10" // Scrolled or open state
          : "bg-transparent z-10" // Initial transparent state
      } text-white flex -mt-24 justify-between sticky w-full items-center h-20 pt-12 pb-12 top-0 pr-6 pl-6 md:pr-36 md:pl-36 transition-colors duration-500`}
    >
      <div className="text-lg font-bold text-[2 4px] w-full">
        <HeaderName />
      </div>

      {!menuOpen ? (
        <nav className="hidden md:flex lg:flex">
          <ul className="flex space-x-4 gap-4">
            {headerLinksArray.map((link: any, i: number) => (
              <Link
                to={link.to}
                key={`${link.id}.${i}`}
                className="hover:text-primary transition duration-500 text-[20px]"
                smooth={true}
                duration={500}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </nav>
      ) : null}

      {menuOpen ? (
        <MobileHeader
          links={headerLinksArray}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      ) : null}

      <button onClick={toggleMenu} className="flex md:hidden z-[1000] md:z-0">
        {menuOpen ? <HiX size={32} /> : <HiMenu size={24} />}
      </button>
    </header>
  );
};

export default Header;
