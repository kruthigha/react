import React from "react";
import ItemCard from "./ItemCard";

const RestaurantMenuAccordian = ({ accordianData, showIndex, setShowIndex, dummy }) => {

  const data = accordianData.card.card;

  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <div
          onClick={setShowIndex}
          className={`flex justify-between items-center border-b p-3 cursor-pointer ${
            showIndex ? "border-gray-500" : "border-gray-300"
          }`}
        >
          <h1 className="text-xl font-semibold">
            {data.title} ({data.itemCards.length})
          </h1>
          <span>{showIndex ? "▲" : "▼"}</span>
        </div>

        {showIndex && (
          <div>
            {data.itemCards.map((item, index) => (
              <ItemCard key={index} item={{ itemCards: [item] }} dummy={dummy}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuAccordian;