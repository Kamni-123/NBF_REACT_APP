import React from 'react'
import Filters from '../Filters/Filters';
import DiningOutCollections from '../DiningOutCollections/DiningOutCollections';
import { LiaFilterSolid } from "react-icons/lia";
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



const DiningOut = () => {
  return (
    <div>
    
    <DiningOutCollections />
    <div className='text-lg '><Filters filterList= {diningOutFilters}/></div>
    </div>

  )
}

export default DiningOut;