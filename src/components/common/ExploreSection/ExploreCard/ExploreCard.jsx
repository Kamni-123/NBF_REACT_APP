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
    const bottomContainers = restaurant?.bottomContainers;
    // const goldOff = restaurant?.gold?.text;
    
    // const proOff = offers.length>1?offers[0].text:null;
   
    // const discount = offers.length>1?offers[1].text: offers.length === 1 ?offers[1].text:null;
  return (
    <div className='explore-card hover:shadow-2xl my-4 pb-32 flex justify-center items-center cursor-pointer py-10 px-4 border-solid border-gray-300 rounded-lg'>
        <div className=' explore-card-cover h-80 w-80  '>
            <img  src={coverImg} className='explore-card-cover-img hover:shadow-2xl h-80 w-80 mb-2 box-border rounded-2xl ' alt={name}/>
            <div className='flex items-center justify-between '>
            <div className=' '>{name}</div>
            
            {/* <div className=''>{goldOff}</div> */}
            
            
            
            <div className=' text-white flex justify-end items-center pr-1 pl-1  bg-green-600 rounded-md '>< FaStar/>{rating}</div>
            </div> 
            <div className='flex items-center justify-between '>
            <div className="  text-gray-600">{cuisines}</div>
            <div className='  text-gray-600'>{approximate}</div>
            </div>
            <div className='flex text-sm font-serif text-gray-700 justify-end gap-72'>{deliveryTime}</div>
            {bottomContainers.length >0 && (
                <div>                
                    <div className='border card-separator'></div>
                    <div className='explore-bottom flex justify-between items-end'>
                        <img className='w-12 h-5' src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} />
                        <div className=' ml-2  rest-bottom-text text-xs text-gray-400 '>{bottomContainers[0]?.text}</div>
                    </div>
                </div>    
            )}
            
            {/* {proOff && <div className=''>{proOff}</div>}
            {goldOff && <div className='absolute'>{goldOff}</div>}
            {discount && <div className=''>{discount}</div>} */}
        </div>
    </div>
    
  )
}

export default ExploreCard; 