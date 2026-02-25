import React, { useState,useEffect } from "react";
import { MeghanaFoods } from "../utils/mockdata";
import { useParams } from "react-router-dom";
import MeghanaFoods from "../utils/mockData.json";
import RestaurantMenuAccordian from "./RestaurantMenuAccordian";

const RestaurantMenu =() => {
  const [showIndex, setShowIndex] = React.useState(0);
  const { resId } = useParams();
  const Cards = MeghanaFoods.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const dummy = 'Dummy data';  
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
  

  return (
    <div className="text-center">
      <h1 className="text-2xl m-2 p-2 justify-center text-center shadow-2xl text-gray-500">{MeghanaFoods.data.cards[0].card.card.text}</h1>
      {accordianData.map((accordianItem,index)=>{
        return <RestaurantMenuAccordian key={accordianItem.card.card.title} accordianData={accordianItem} showIndex = { index === showIndex ? true:false} setShowIndex = {() => setShowIndex(showIndex === index ? null : index)} dummy={dummy}/>
      })}
    </div>
  );
};

export default RestaurantMenu;
