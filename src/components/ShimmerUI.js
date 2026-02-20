import React from "react";

const ShimmerUI = () => {
  return (
    <>
    <div id="searchContainer" className="searchContainer">
        <input placeholder="Search restaurants..."  className="border border-black"/>
        <button id="seachBtn" className="ml-4 rounded-md px-2 bg-orange-400" > Search Restaurant</button>
        <button id="seachBtn" className="ml-4 rounded-md px-2 bg-orange-400"> Top Restaurants </button>
      </div>
    <div className="flex flex-wrap px-10">
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200"></div>

      <div className="shimmer-card">Card</div>
    </div>
    </>
  );
};

export default ShimmerUI;
