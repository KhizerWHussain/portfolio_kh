import CustomImage from "@/Components/Server/CustomImage";
import React from "react";

const SingleProject = ({ item, onClick }: any) => {
  return (
    <CustomImage
      alt="Project"
      image={item.thumbnail.src}
      className="w-full h-64 object-contain rounded-[2em] hover:scale-105 transition duration-300 mb-4 resize"
      blurDataURL={item.thumbnail.blurDataURL}
      fetchPriority="high"
      imageQuality={100}
      havePriority={true}
      optimizeImage={true}
      ClickFunction={() => onClick(item)}
    />
  );
};

export default SingleProject;
