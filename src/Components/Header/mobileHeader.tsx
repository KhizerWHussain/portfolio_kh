import { Link } from "react-scroll";
import { motion } from "framer-motion";

const MobileHeader = ({ links, menuOpen, setMenuOpen }: any) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{
        opacity: menuOpen ? 1 : 0,
        y: menuOpen ? 0 : "-100%",
      }}
      transition={{ duration: 0.3 }}
      style={{ width: "100%" }}
      className={`border-none outline-none overflow-hidden fixed top-0 left-0 w-[100vw] h-[100vh] bg-black md:hidden transition-transform duration-500 min-w-full min-h-full ${
        menuOpen ? "translate-x-0 z-[1000]" : "-translate-x-full"
      }`}
    >
      <ul className="flex flex-col items-center justify-center space-y-4 p-4 h-[100vh] gap-8">
        {links.map((link: any, i: number) => (
          <Link
            to={link.to}
            key={link.id + i}
            className="hover:text-primary transition duration-500 text-[32px]"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
};

export default MobileHeader;
