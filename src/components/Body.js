import { useState } from "react";
import { resList } from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

/**
 * Restaurant container
 * search
 * Restaurant card => img, food Name,cuisines,star, eta
 * @returns
 */
export const Body = () => {
  const arr = useState(resList) 
  // const [res,setRes] = arr
  const res= arr[0]
  const setRes = arr[1]
  const filterRestaurants = () =>{
    console.log('Restaurants will be filtered Btn clicked')
    const filterRes = resList.filter((res)=>{
      return res.info.avgRating > 4
    })
    setRes(filterRes);
  }
  return (
    <div id="body-container" className="bodyContainer">
      <div id="searchContainer" className="searchContainer">
        <input placeholder="Search restaurants..." />
        <button id="seachBtn" onClick={filterRestaurants}> Top Restaurants </button>
      </div>
      <div className="restaurantContainer" id="restaurantContainer">
        {res.map((item) => 
          <RestaurantCard resData={item} key={item.info.id} />)}
      </div>
    </div>
  );
};

export default Body;