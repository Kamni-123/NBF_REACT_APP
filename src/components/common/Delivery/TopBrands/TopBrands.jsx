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
      items: 3,
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
        
          <div className="text-2xl font-semibold pl-4 pt-7 pb-7 text-gray-500">
            Top Brands For You!
            <Carousel   className=" pt-7" responsive={responsive}>
              <div  className="w-166.6 h-150">
                <img className="  rounded-full w-40 flex justify-center items-center"
                  src="https://b.zmtcdn.com/data/brand_creatives/logos/92cb4e710a3f6019f0f4958c35e786c2_1568614848.png"
                  alt="pizza"
                />
                <h1 className="hi pb-5 ">Shree Anandhaasr</h1>
                <p>25 min</p>
              </div>
              <div  className="  ">
                <img className=" w-40 rounded-full flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/381f5d7481d4cf08b35a063b8787070b_1617918168.png"
                alt="pizza" />
                <h1 className="pb-4">Sree Annapoorna Sree Gowrishankar</h1>
                <p>13 min</p>
              </div>
              <div >
                <img className="rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613214750.png"
                alt="pizza" />
                <h1 className="font-medium pb-4 ">KFC</h1>
                <p>25 min</p>
              </div>
              <div >
                <img className="rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/e5b584c45976692fd36159ec21a35981_1597745602.png"
                alt="pizza" />
                <h1 className=" pb-3 ">Hari Bhavanam</h1>
                <p>20 min</p>
              </div>
              <div >
                <img className="rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187820.png"
                alt="pizza" />
                <h1 className=" pb-3">Burger King</h1>
                <p>48 min</p>
              </div>
              <div >
                <img className="rounded-full  w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505737.png"
                alt="pizza" />
                <h1 className=" ">Dindigul Thalappakatti</h1>
                <p>35 min</p>
              </div>
              <div > 
                <img className=" rounded-full w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
                alt="pizza" />
                <h1 className="">Pizza Hut</h1>
                <p>49 min</p>
              </div>
            </Carousel>
          </div>
          {/* <Slider {...settings}>
                  {deliveryItems.map((item) => {
                      return <span>{item.title}</span>;
                  })}
  
              </Slider> */}
        </div>
    );
  };
  
  export default TopBrands;
  