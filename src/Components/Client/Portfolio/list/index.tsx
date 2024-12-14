import CustomImage from "@/Components/Server/CustomImage";
import React from "react";
import { motion } from "framer-motion";

const SingleProject = ({ item, onClick, index }: any) => {
  return (
    <motion.div
      className="h-60 w-80"
      initial={{ opacity: 0, scale: 0.25, filter: "blur(6px)" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.25, delay: index * 0.15, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
    >
      <CustomImage
        alt="Project"
        image={item.thumbnail.src}
        className="w-80 h-60 min-h-full object-cover rounded-[2em] hover:scale-110 transition duration-300"
        blurDataURL={item.thumbnail.blurDataURL}
        fetchPriority="high"
        imageQuality={100}
        havePriority={true}
        optimize={true}
        loadingEase="lazy"
        click={() => onClick(item)}
      />
    </motion.div>
  );
};

export default SingleProject;
