import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState([]);
  const [serachText, setSerachText] = useState("");
  const [extData, setExtData] = useState([]);
  const dataURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const datas = await fetch(dataURL);
    const jsonData = await datas.json();
    setData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setExtData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (data.length === 0) {
    return <Shimmer />;
  }
  const handleSearch = () => {
    if (serachText.trim() === "") {
      setData(extData);
      return;
    }
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={serachText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              handleSearch();
              const filteredData = extData.filter((item) =>
                item.info.name.toLowerCase().includes(serachText)
              );
              setData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const listData = resList.filter(
              (item) => item.info.avgRating > 4.3
            );
            setData(listData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
