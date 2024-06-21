import { Link } from "react-router-dom";
import { restrourl } from "../utils/constants";
const RestaurantCard = (props) => {

    const restData1 = props.restData;
    const {  name, id, cuisines, avgRating, costForTwo, sla } = restData1.info;
    

    return (
        <>
            <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-10 hover:bg-red-50">
                <img className="rounded-lg" src={restrourl+restData1.info.cloudinaryImageId}  />
                <h3 className='font-bold p  y-4'>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{`${sla.deliveryTime} mins`}</h4>
            </div>
            
        </>
    )
}

export const withPromotedLabel = (RestaurantCard) => {

 return (props) =>  { 
    return (
        <>
        <h1 className="absolute p-2 m-2 bg-black text-white rounded-lg">Promoted</h1>
        <RestaurantCard {...props}/>
        </>
    )
}
}

export default RestaurantCard;