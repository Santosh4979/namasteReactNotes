import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmerui from "./Shimmer";
import { Link } from "react-router-dom";
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

  const RestaunrantPromoted = withPromotedLabel(RestaurantCard);
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
        <div className="flex">
        <div className="search m-4 p-4 flex items-center">
        <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        className="border mx-4 border-solid  border-black"
        onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button id="search-btn" className="px-4 py-2 bg-green-100 rounded-lg" onClick={filterTopRated}>
          Search
        </button>
        </div>
        <button id="filter-btn" className="px-4 m-4 bg-gray-40 rounded-lg" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        </div>
        <div className="flex flex-wrap m-4 p-4">
          {restaurants?.length >0 && restaurants.map((restaurant) => (

           
           <Link to={`/restaurant/${restaurant.info.id}`} >
          {restaurant?.info?.promoted ? <RestaunrantPromoted key={restaurant.info.id} restData={restaurant}/> : 
           <RestaurantCard key={restaurant.info.id} restData={restaurant} />} </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
