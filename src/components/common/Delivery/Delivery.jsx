import React from 'react'
import Filters from '../Filters/Filters'
import { LiaFilterSolid } from "react-icons/lia";
import DeliverColections from './DeliveryCollections/DeliverColections';



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

const Delivery = () => {
  return (
    <div>
    <div className='text-lg'> <Filters filterList= {deliveryFilters}/></div>
    <DeliverColections />
    </div>
    
  )
}

export default Delivery