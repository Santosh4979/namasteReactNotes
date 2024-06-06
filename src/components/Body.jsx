import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmerui from "./Shimmer";

const Body = () => {
  const [restaurants, setRetaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const filterTopRated = () => {
    const topRatedRestaurants = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    console.log("topRatedRestaurants", topRatedRestaurants);
    setRetaurants(topRatedRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const restrourl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  const fetchData = async () => {
    const response = await fetch(restrourl);
    const data = await response.json();
    const restaurantsdata = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("restaurantsdata", restaurantsdata);
    setRetaurants(restaurantsdata);
  };

  return (
    restaurants?.length === 0 ? <Shimmerui /> :
    <>
      <div className="body">
        <div className="filter">
        <div className="search">
        <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        className="search-input"
        onChange={(e) => setSearchText(e.target.value)}
        ></input>
        
        </div>
        <button id="filter-btn" className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        </div>
        <div className="res-container">
          {restaurants?.length >0 && restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
