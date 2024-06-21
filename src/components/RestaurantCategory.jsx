import ItemList from "./ItemList";
import { downArrown }  from "../images/downArrown.png";
const RestaurantCategory = ({data}) => {

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
               <div className='flex justify-between'> 
            <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
            <img src={downArrown}/>
            </div>
            <ItemList itemlist={data?.itemCards}    />
            </div>  
        </div>
    )
}

export default RestaurantCategory;