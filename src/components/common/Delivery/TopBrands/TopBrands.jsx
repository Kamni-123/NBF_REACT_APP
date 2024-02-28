// eslint-disable-next-line
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5 ,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const TopBrands = () => {
    return (
      <div className="delivery-collections ml-1 mt-2">
        
        
          <div className="text-2xl  font-semibold pl-4 pt-7 pb-7 text-gray-500">
            Top Brands For You!
            <Carousel   className=" pt-7" responsive={responsive}>
              <div  className=" cursor-pointer  ml-7  w-166.6 h-150">
                <img className=" cursor-pointer shadow-2xl  hover:bg-gray-400  rounded-full w-40 flex justify-center items-center"
                  src="https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676521299.png?output-format=webp"
                  alt="pizza"
                />
                <h1 className="hitext-gray-500 hover:text-black     ml-7 pb-5 ">Subway</h1>
                <h2 className="text-gray-500 hover:text-black ml-8   font-normal text-lg">25 min</h2>
              </div>
              <div  className=" ml-7  ">
                <img className=" cursor-pointer  shadow-2xl  hover:bg-gray-400  w-40 rounded-full flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/381f5d7481d4cf08b35a063b8787070b_1617918168.png"
                alt="pizza" />
                <h1 className="pb-4 mr-5">Annapoorna</h1>
                <h2 className=" ml-7 font-normal text-lg">13 min</h2>
              </div>
              <div className="ml-7 ">
                <img className=" cursor-pointer  shadow-2xl hover:bg-gray-400 rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613214750.png"
                alt="pizza" />
                <h1 className="font-medium pb-4 ml-14 ">KFC</h1>
                <h2 className=" font-normal ml-12 text-lg">25 min</h2>
              </div>
              <div className="ml-7 " >
                <img className=" cursor-pointer  shadow-2xl hover:bg-gray-400 rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/e5b584c45976692fd36159ec21a35981_1597745602.png"
                alt="pizza" />
                <h1 className=" pb-3 ">Hari Bhavanam</h1>
                <h2 className=" font-normal ml-12 text-lg">20 min</h2>
              </div>
              <div className="ml-7 " >
                <img className=" cursor-pointer  shadow-2xl hover:bg-gray-400 rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187820.png"
                alt="pizza" />
                <h1 className=" pb-3">Burger King</h1>
                <h2 className=" font-normal ml-12 text-lg">48 min</h2>
              </div>
              <div className="ml-7 " >
                <img className="  shadow-2xl hover:bg-gray-400 rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505737.png"
                alt="pizza" />
                <h1 className=" ">Thalappakatti</h1>
                <h2 className=" font-normal ml-12 text-lg">35 min</h2>
              </div>
              <div  className="ml-7 "> 
                <img className="  shadow-2xl cursor-pointer rounded-full w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
                alt="pizza" />
                <h1 className="">Pizza Hut</h1>
                <h2 className=" font-normal ml-12  text-lg">49 min</h2>
              </div>
            </Carousel>
          </div>
          
        </div>
    );
  };
  
  export default TopBrands;
  