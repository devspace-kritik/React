import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [data, setData] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            const listData = resList.filter((item)=> item.info.avgRating>4.3);
            setData(listData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          data.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))
        }
        
      </div>
    </div>
  );
};

export default Body;