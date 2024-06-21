import React, { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import { restauranturl } from "../utils/constants";
import Shimmerui from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restroMenu = useRestaurantMenu(resId);
    const foodMenu = restroMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    const categories = restroMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const restroRantName = restroMenu?.data?.cards[0];
    return (
        foodMenu?.length === 0 ? <Shimmerui /> :
        <>
        <div className="text-center">
        <h1 className="font-bold my-10 text-2xl"> {restroRantName?.text}  </h1>
        {categories?.map((item) => (
            <RestaurantCategory data={item?.card?.card}/>
        ))}

        {/* <ul>
         {foodMenu?.map((item) => (
            <li key={item?.card? .info?.id}> {item?.card?.info?.name} {item?.card?.info?.price/100}Rs.</li>
         ))}   
            </ul>  */}

        </div>
        </>
    ) }


export default RestaurantMenu;