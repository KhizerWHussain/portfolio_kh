"use client";
import React, { useState } from "react";
import { headerLinksArray } from "@/data";
import { Link } from "react-scroll";
import MobileHeader from "./mobileHeader";
import { HiMenu, HiX } from "react-icons/hi";
import HeaderName from "./headerName";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();

  const framerPadding = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["3rem", "0rem"]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.header
      style={{
        paddingTop: framerPadding,
        paddingBottom: framerPadding,
        background: backgroundColor,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-white z-10 flex fixed w-full items-center h-20 pl-6 pr-6 top-0 md:pl-36 md:pr-36 bg-transparent"
    >
      <div className="text-lg font-bold text-[24px] w-full">
        <HeaderName />
      </div>

      {!menuOpen ? (
        <nav className="hidden md:flex lg:flex">
          <ul className="flex space-x-4 gap-4">
            {headerLinksArray.map((link: any, i: number) => (
              <motion.div
                key={`${link.id}.${i}`}
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: i * 0.15, bounce: 0.75 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.to}
                  className="hover:text-primary transition duration-500 text-[20px] cursor-pointer"
                  smooth={true}
                  duration={500}
                >
                  {link.text}
                </Link>
              </motion.div>
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
    </motion.header>
  );
};

export default Header;
