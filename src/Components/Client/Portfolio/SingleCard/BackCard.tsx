import React from "react";
import style from "../SingleCard/card.module.css";

const BackCard = ({ item }: any) => {
  return (
    <div
      className={`${style.flip_card_back} bg-gray-800 text-white rounded-lg shadow-md`}
    >
      <div className="p-6">
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

export default BackCard;
