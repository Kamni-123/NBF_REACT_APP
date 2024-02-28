import React from 'react'


const ExploreCard = ({restaurant}) => {
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    // const rating = restaurant?.info?.rating?.rating_text; 
    const deliveryTime = restaurant?.order?.deliveryTime;
    // const approximate = restaurant?.info?.cfo?.text;
    // const offers = restaurant?.bulkOffers ?? [];
    // const cuisines = restaurant?.info?.cuisine?.map((item)=> item.name).slice(0, 3);
    // const bottomContainers = restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    // eslint-disable-next-line
    // const proOff = offers.length>1?offers[0].text:null;
    // // eslint-disable-next-line
    // const discount = offers.length>1?offers[1].text: offers.length === 1 ?offers[1].text:null;
  return (
    <div className='explore-card my-12  flex justify-center items-center cursor-pointer py-10 px-4 border border-solid border-gray-300 rounded-lg'>
        <div className=' explore-card-cover h-80 w-80  '>
            <img  src={coverImg} className='explore-card-cover-img h-80 w-80 box-border rounded-lg ' alt={name}/>
            <div>{deliveryTime}</div>
            {/* {proOff && <div className=''>{proOff}</div>} */}
            {goldOff && <div className='absolute'>{goldOff}</div>}
            {/* {discount && <div className=''>{discount}</div>} */}
        </div>
    </div>
    
  )
}

export default ExploreCard; 