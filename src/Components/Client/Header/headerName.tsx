import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function constructName(text: string): string[] {
  return text.split("");
}

function HeaderName() {
  const nameAlphabets = constructName("hizer Hussain.");

  return (
    <Link href="/" className="h-full">
      <span className="text-primary">K</span>
      {nameAlphabets.map((alph: string, i: number) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.05 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: i * 0.05 },
          }}
          whileHover={{ color: "#e31b6d" }}
          whileTap={{ opacity: 0.5 }}
          viewport={{ once: true }}
        >
          {alph}
        </motion.span>
      ))}
    </Link>
  );
}

export default HeaderName;
