import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { name: name1 } = useContext(UserContext);
  const { name,cuisines,avgRating,costForTwo, cloudinaryImageId } = resData?.info
  // const styleCard = {
  //   backgroundColor: "#f0f0f0",
  //   margin: "10px",
  // };
  return (
    <div className="w-64 h-96 m-2 rounded-lg bg-gray-100 hover:bg-gray-200">
      <div id="resImgContainer" className="resImgContainer">
        <img
          id="resImg"
          className="w-full h-48 "
          src={CDN_URL+cloudinaryImageId}
          alt={name}
        />
      </div>
      <div id="resImgContainer" className="p-2 m-2">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm font-sans">{cuisines.join(", ")}</p>
      <p className="text-sm font-bold">{avgRating} Ratings</p>
      <p className="text-md font-serif">₹{costForTwo / 100} for two</p>
       <p className="text-md font-serif">{name1}</p>
      </div>
    </div>
  );
};

//HOC 
// input - RestaurantCard
// output - RestaurantCard with promoted tag
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-sm p-1">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;