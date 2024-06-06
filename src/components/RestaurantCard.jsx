import { restrourl } from "../utils/constants";
const RestaurantCard = (props) => {


    const restData1 = props.restData;
    const {  name, cuisines, avgRating, costForTwo, totalRatingsString, sla } = restData1.info;
    

    return (
        <>
            <div  className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img className="res-logo" src={restrourl+restData1.info.cloudinaryImageId}  />
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating}</h4>
                <h4>{`${sla.deliveryTime} minutes`}</h4>
            </div>
        </>
    )
}

export default RestaurantCard;