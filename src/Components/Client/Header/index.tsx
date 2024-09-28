"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerLinksArray } from "@/Data/header";
import { Link as ScrollLink } from "react-scroll";

// const Header = () => {
//   const [isInWhiteSection, setIsInWhiteSection] = useState(false);
//   const targetSectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // When the section is in view, set to true
//             setIsInWhiteSection(true);
//           } else {
//             // When the section leaves the view, set to false
//             setIsInWhiteSection(false);
//           }
//         });
//       },
//       {
//         threshold: 0.1, // Adjust this threshold to detect more accurately when the section is visible
//       }
//     );

//     if (targetSectionRef.current) {
//       observer.observe(targetSectionRef.current);
//     }

//     // Clean up the observer when the component unmounts
//     return () => {
//       if (targetSectionRef.current) {
//         observer.unobserve(targetSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <header
//       className={`${
//         isInWhiteSection ? "bg-white text-black" : "bg-transparent text-white"
//       } flex justify-between items-center h-20 pt-12 pb-12 sticky top-0 z-50 pr-36 pl-36 transition-colors duration-300`}
//     >
//       <div className="text-lg font-bold text-[24px]">
//         <Link href={"/"}>Khizer Hussain.</Link>
//       </div>
//       <nav>
//         <ul className="flex space-x-4 gap-4">
//           {headerLinksArray.map((link: any, i: number) => (
//             <Link
//               key={link.id + i}
//               href={link.slug}
//               className={`${
//                 isInWhiteSection
//                   ? "hover:text-primary text-black"
//                   : "hover:text-primary text-white"
//               } transition duration-300 text-[20px]`}
//             >
//               {link.text}
//             </Link>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 50px, set scrolled to true
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      } flex justify-between items-center h-20 pt-12 pb-12 sticky top-0 z-50 pr-36 pl-36 transition-colors duration-300`}
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
              className="hover:text-primary transition duration-300 text-[20px]"
              smooth={true}
              duration={500}
            >
              {/* <Link
              key={link.id + i}
              href={link.slug}
              className="hover:text-primary transition duration-300 text-[20px]"
            > */}
              {link.text}
              {/* </Link> */}
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
