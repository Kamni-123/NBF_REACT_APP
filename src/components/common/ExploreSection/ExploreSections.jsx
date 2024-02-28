import React from "react";
// import { restaurants } from '../../../Data/Restaurants';
import ExploreCard from "./ExploreCard/ExploreCard";

const ExploreSections = ({ list, collectionName }) => {
  return (
    <div className="max-width">
      <div className="collection-title text-2xl  font-semibold pl-4  text-gray-500">{collectionName}</div>
      <div className="explore-grid flex flex-wrap justify-between">
        {list.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSections;
