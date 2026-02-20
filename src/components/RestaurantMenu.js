import React, { useEffect } from "react";
import { MeghanaFoods } from "../utils/mockdata";
import { useParams } from "react-router-dom";
import MeghanaFoods from "../utils/mockData.json";
const RestaurantMenu =() => {
  const { resId } = useParams();
  const Cards = MeghanaFoods.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log('Cards',Cards)  
  useEffect(() => {
    const fetchData = async () => {
      console.log("RestaurantMenu useEffect called");
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/bangalore/mainland-china-1-church-street-bangalore",
      );
      console.log(data);
      const json = await data.json();
      console.log(json);
    };
    fetchData();
  }, [resId]);
  const accordianData =Cards.filter((card)=>{
        return card['card'].card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
  const menuItems = accordianData.map((menu)=>{
    return menu.card.card.itemCards
  })
  console.log('menuItems',menuItems)

  return (
    <div className="text-center">
      <h1 className="text-2xl m-2 p-2 justify-center text-center shadow-2xl text-gray-500">{MeghanaFoods.data.cards[0].card.card.text}</h1>
      <ul>
        { menuItems[0].map((item)=>{
        return <li key={item.card.info.id}>{item.card.info.name}</li>
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
