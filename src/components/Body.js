import { useState, useEffect } from "react";
import { resList } from "../utils/mockdata";
import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
/**
 * Restaurant container
 * search
 * Restaurant card => img, food Name,cuisines,star, eta
 * @returns
 */
export const Body = () => {
  const [searchText,setSearchText] = useState('');
  // const [res,setRes] = arr
  // const res= arr[0]
  // const setRes = arr[1]
  const captureTyping = (e)=>{
    console.log('User is typing',e.target.value);
    setSearchText(e.target.value)

  }
  const searchRestaurants = () => {
    console.log('Search Btn Clicked');
    const searchRes = res.filter((restaurant)=>{
      return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    console.log(searchRes);
    setResCopy(searchRes);

  }
 
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
  const [res, resCopy, setRes, setResCopy] = useFetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.8414537&lng=77.6764237&str=Meghana%20Foods&trackingId=bfeba256-6d8d-a2de-55ef-2180fff88f36&submitAction=ENTER&queryUniqueId=ca750778-73ed-92f3-7366-8fa507911b0f');
  const filterRestaurants = () =>{
    console.log('Restaurants will be filtered Btn clicked')
    const filterRes = res.filter((res)=>{
      return res.info.avgRating > 4
    })
    setResCopy(filterRes);
    console.log('res',resCopy)
  }
  
  // useEffect(()=>{
  //   let timer;
  //   // console.log('useEffect called after component is rendered');
  //   const fetchData = async ()=>{
      
  //     try {
  //       // const dat = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9263343&lng=77.5831974&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  //       // const json1 = await dat.json();
  //       // console.log(json1.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //       const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.8414537&lng=77.6764237&str=Meghana%20Foods&trackingId=bfeba256-6d8d-a2de-55ef-2180fff88f36&submitAction=ENTER&queryUniqueId=ca750778-73ed-92f3-7366-8fa507911b0f')
  //       const json = await data.json();
  //       const resList = (json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants);  
  //       setRes(resList);
  //       setResCopy(resList);
  //        timer  =setInterval(()=>{
  //         console.log('setInterval Called func comp')
  //       },1000)
  //     } catch (error){
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  //   return ()=>{
  //         console.log('clearInterval func comp');
  //         clearInterval(timer);
  //   }
  // },[])
 

  //conditional rendering
  return res.length === 0 ? <ShimmerUI /> : (
    <div id="body-container" >
      {/* {console.log('Body Rendered 2')} */}
      <div id="searchContainer" className="px-10 py-4">
        <input  className="border border-black"placeholder="Search restaurants..." type="text" onChange={captureTyping}  value={searchText} />
        <button className="ml-4 rounded-md px-2 bg-orange-400" id="seachBtn" onClick={searchRestaurants}> Search Restaurant</button>
        <button  className="ml-4 rounded-md px-2 bg-orange-400" id="seachBtn" onClick={filterRestaurants}> Top Restaurants </button>
      </div>
      <div className="flex flex-wrap px-10 " id="restaurantContainer">
        {resCopy.map((item) => 
        <Link key={item.info.id} to={`/restaurant/${item.info.id}`}>
          {item.info.promoted ? <RestaurantCardPromoted resData={item} /> : <RestaurantCard resData={item}  />}
          </Link>)}
      </div>
    </div>
  );
};

export default Body;