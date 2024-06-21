import { restrourl } from "../utils/constants";

const ItemList = ({itemlist}) => {
    console.log('ItemList', itemlist[0]?.card?.info?.imageId);
    return (
        <div>
            {itemlist?.map((item) => (
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                  <div className='w-9/12'>
                    <div className='py-2'>  
                    <span className="font-bold text-lg">{item?.card?.info?.name}</span>
                    <span>₹ {item?.card?.info?.price/100} </span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                <div className='w-3/12 p-4'> 
                <img src={restrourl+item?.card?.info?.imageId} className="w-full" />
                <button className='p-2 bg'> Add +</button>
                </div>
               </div>
            ))}
        </div>
    )
}

export default ItemList;