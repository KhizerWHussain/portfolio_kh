import React from "react";
import style from "../SingleCard/card.module.css";

const FrontCard = () => {
  return (
    <div
      className={`${style.flip_card_front} bg-gray-800 text-white rounded-lg shadow-md`}
    >
      <div className="p-6">
        <div className="relative">
          <div className={style.circle}></div>
          <div className={style.circle_right}></div>
          <div className={style.circle_bottom}></div>
        </div>
        <div className="mt-4">
          <span className="badge bg-green-500 text-white px-2 py-1 rounded">
            Pasta
          </span>
        </div>
        <div className="mt-2">
          <p className="font-bold text-lg">Spaghetti Bolognese</p>
          <p className="text-gray-400 text-sm">
            30 Mins &nbsp; | &nbsp; 1 Serving
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
