import React from 'react'
import Filters from '../Filters/Filters';
import { LiaFilterSolid } from "react-icons/lia";
import DeliveryCollections from './DeliveryCollections/DeliveryCollections';
import TopBrands from './TopBrands/TopBrands';
import ExploreSections from '../ExploreSection/ExploreSections';
import { restaurants } from '../../../Data/Restaurants';







const deliveryFilters = [
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

const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
    <div className='text-lg'> <Filters filterList= {deliveryFilters}/></div>
    <DeliveryCollections/>
    <TopBrands/>
    <ExploreSections list={restaurantList} collectionName = "Delivery Restaurants in Madurai" />
  
    
   
    
    
    </div>
    
  )
}

export default Delivery;