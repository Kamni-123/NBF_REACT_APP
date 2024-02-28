import React from 'react'

const ExploreCard = ({restaurant}) => {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    // const rating = restaurant?.info?.rating?.rating_text; 
    // const DeliveryTime = restaurant?.order?.DeliveryTime;
    // const approximate = restaurant?.info?.cfo?.text;
    // const offers = restaurant?.bulkOffers ?? [];
    // const cuisines = restaurant?.info?.cuisine?.map((item)=> item.name).slice(0, 3);
    // const bottomContainers = restaurant?.bottomContainers;
    // const goldOff = restaurant?.gold?.text;
    // const proOff = offers.length>1?offers[0].text:null;
    // const discount = offers.length>1?offers[1].text: offers.length === 1 ?offers[1].text:null;
  return (
    <div className='explore-card my-12  flex justify-center items-center cursor-pointer py-10 px-4 border border-solid border-gray-300 rounded-lg'>
        <div className=' explore-card-cover w-full h-full object-cover transform-none opacity-100 transition-opacity duration-250 ease-in-out" src="..." alt="..."flex justify-centre items-center border rounded-lg relative '>
            <img  src={coverImg} className='explore-card-cover-img h-24 box-border tap-highlight-transparent  object-cover transform-none opacity-100 transition-opacity duration-250 ease-in-out" src="..." alt="..." border-cover rounded-15' alt={name}/>
        </div>
    </div>
    
  )
}

export default ExploreCard; 