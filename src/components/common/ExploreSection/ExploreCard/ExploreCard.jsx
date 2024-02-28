import React from 'react'
import { FaStar } from "react-icons/fa";


const ExploreCard = ({restaurant}) => {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const rating = restaurant?.info?.rating?.rating_text; 
    const deliveryTime = restaurant?.order?.deliveryTime;
    const approximate = restaurant?.info?.cfo?.text;
    // const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine?.map((item)=> item.name).slice(0,2);
    // const bottomContainers = restaurant?.bottomContainers;
    // const goldOff = restaurant?.gold?.text;
    
    // const proOff = offers.length>1?offers[0].text:null;
   
    // const discount = offers.length>1?offers[1].text: offers.length === 1 ?offers[1].text:null;
  return (
    <div className='explore-card hover:shadow-2xl my-4 pb-20 flex justify-center items-center cursor-pointer py-10 px-4 border border-solid border-gray-300 rounded-lg'>
        <div className=' explore-card-cover h-80 w-80  '>
            <img  src={coverImg} className='explore-card-cover-img h-80 w-80 mb-2 box-border rounded-lg ' alt={name}/>
            <div className='flex items-center justify-between '>
            <div className=' '>{name}</div>
            
            {/* <div className=''>{goldOff}</div> */}
            
            
            
            <div className=' text-white flex bg-green-600 '>< FaStar/>{rating}</div>
            </div>
            <div className='flex items-center justify-between '>
            <div className="">{cuisines}</div>
            <div className=''>{approximate}</div>
            </div>
            <div className='flex justify-end gap-72'>{deliveryTime}</div>
            {/* <div className=''>{bottomContainers}</div>  */}
            
            {/* {proOff && <div className=''>{proOff}</div>}
            {goldOff && <div className='absolute'>{goldOff}</div>}
            {discount && <div className=''>{discount}</div>} */}
        </div>
    </div>
    
  )
}

export default ExploreCard; 