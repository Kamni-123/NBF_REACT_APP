import React from 'react'
import Filters from '../Filters/Filters';
// import NightLifeCollections from '../NightLife/NightLifeCollections';
import { LiaFilterSolid } from "react-icons/lia";
import ExploreSections from '../ExploreSection/ExploreSections';
import { Nightlifedata } from '../../../Data/Nightlifee';

const diningOutFilters = [
  {
    id: 1,
    icon: < LiaFilterSolid />,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Ratings:4.0+',
  },
  {
    id: 3,
    title:'Safe and Hygeine',
  },
  {
    id: 4,
    title:'Pure Veg',
  },
  {
    id: 5,
    title:'Delivery Time',
  },
  {
    id: 6,
    title:'Great Offers',
  },
]


const restaurantList = Nightlifedata;
const Nightlife = () => {
  return (
    <div> 
    {/* <NightLifeCollections /> */}
    <div className='text-lg '><Filters filterList= {diningOutFilters}/></div>
    <div className=" mt-7"><img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="XOXO" /></div>
    {/* <div className="text-3xl text-gray-700 font-semibold mt-5">Trending dining restaurants in Coimbatore</div> */}
    <div className=' mt-6'>
    <ExploreSections list={restaurantList} collectionName = "Trending Nightlife restaurants in Madurai" />
    </div>
    </div>
  );
};

export default Nightlife; 