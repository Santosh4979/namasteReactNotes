import { useEffect, useState } from "react";
import { restauranturl } from "../utils/constants";
const useRestaurantMenu = (resId) => {
    const [foodmenu, setFoodMenu] = useState([]);
    const fetchMenu = async () => {
        const restApiUrl = restauranturl + resId;
        const response = await fetch(restApiUrl);
        const data = await response.json();
        setFoodMenu(data);
        //data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories?.itemCards[3].card
             
    } 
    useEffect(() => {
        fetchMenu();
    }, []);
    
    return foodmenu;
 
}

export default useRestaurantMenu;