"use client";
import React from "react";
import style from "../SingleCard/card.module.css";
import CustomImage from "@/Components/Server/CustomImage";
import AppStoreIcon from "../../../../../assets/appstore.png";
import { useRouter } from "next/navigation";

const BackCard = ({ item }: any) => {
  const router = useRouter();

  return (
    <div
      className={`${style.flip_card_back} bg-gray-800 text-white rounded-[2em] flex flex-col`}
    >
      <div className="p-6 flex flex-col gap-4">
        <span className="py-1 rounded font-semibold text-lg">{item.name}</span>
        <p>{item.desc}</p>
      </div>
      <div className="p-6 flex w-full gap-4">
        <CustomImage
          image={AppStoreIcon}
          blurDataURL={AppStoreIcon.blurDataURL}
          alt="Ios"
          className="cursor-pointer"
          ClickFunction={() => router.push(item.ios, { scroll: true })}
        />
        {/* <CustomImage
          image={AppStoreIcon}
          blurDataURL={AppStoreIcon.blurDataURL}
          alt="Ios"
          ClickFunction={() => router.push(item.ios, { scroll: true })}
        /> */}
      </div>
    </div>
  );
};

export default BackCard;
