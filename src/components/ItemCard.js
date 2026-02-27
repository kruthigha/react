import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ item, dummy, className = "" }) => {
  console.log({ item, dummy });
  const dispatch = useDispatch();
  console.log("ItemCard rendered with dummy:", dummy);
  const info = item.itemCards[0].card.info;
  function handleAddItemToCart() {
    dispatch(addItem(item));
  }

  return (
    <div data-testid= "itemCard"
      className={`mx-auto border-b border-gray-200 p-4 flex justify-between items-center gap-4 ${className}`}
    >
      {/* LEFT SIDE */}
      <div>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">{info.name + " - "}</h1>
          <p className="text-lg font-medium">{" ₹" + info.price / 100}</p>
        </div>

        <p className="mt-2 text-gray-600 text-sm">{info.description}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-36 h-32 shrink-0">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={CDN_URL + info.imageId}
          alt="item"
        />

        <button
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 
               bg-white text-green-600 font-semibold 
               px-6 py-1.5 rounded-lg
               shadow-md border border-gray-200"
          onClick={handleAddItemToCart}
          data-testid = "addBtn"
        >
          Add+
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
