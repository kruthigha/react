import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name,cuisines,avgRating,costForTwo, cloudinaryImageId } = resData?.info
  const styleCard = {
    backgroundColor: "#f0f0f0",
    margin: "10px",
  };
  return (
    <div id="restaurantCard" className="restaurantCard" style={styleCard}>
      <div id="resImgContainer" className="resImgContainer">
        <img
          id="resImg"
          className="resImg"
          src={CDN_URL+cloudinaryImageId}
          alt={name}
        />
      </div>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Ratings</p>
      <p>₹{costForTwo / 100} for two</p>
    </div>
  );
};

export default RestaurantCard;