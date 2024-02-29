import React from 'react'
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
      items: 4,
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

  const DiningOutCollections = () => {
    return (
      <div className="delivery-collections  ml-1 mt-2">
        
          <div className="text-3xl font-semibold bg-gray-100 pl-1 mb-7 pb-5 text-gray-700">
          Collections
          <div className="text-xl text-gray-500 pb-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Coimbatore, based on trends</div>
            <Carousel   className=" bg-gray-100 " responsive={responsive}>
              <div  className=" ml-1">
                  <div className=" ">
                <img className="rounded-md w-80 h-80 object-cover"
                  src="https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1692344090.jpg"
                  alt="restaurant"
                />
                </div>
                {/* <h1 className="flex justify-center items-center ">Pizza</h1> */}
                <p></p>
              </div>
              <div  className=" ml-1">
                <img className=" rounded-md w-80 h-80 object-cover "
                src="https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1692375924.jpg"
                alt="restaurant " />
                
              </div>
              <div  className=" ml-1">
                <img className="rounded-md  w-80 h-80 object-cover "
                src="https://b.zmtcdn.com/data/collections/0817dce042a9e83ee7323323f5ee502d_1692376226.jpeg"
                alt="pizza" />
                {/* <h1 className="flex justify-center items-center ">Burger</h1> */}
                <p></p>
              </div>
              <div className=" ml-1" >
                <img className=" rounded-md  w-80 h-80 object-cover"
                src="https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1692343610.jpg"
                alt="pizza" />
                {/* <h1 className="flex justify-center items-center ">Cake</h1> */}
                <p></p>
              </div>
              <div className=" ml-1" >
                <img className="  rounded-md  w-80 h-80 object-cover"
                src="https://b.zmtcdn.com/data/collections/92aaa9b449d0e05e0d118b5a0fa8fadd_1682856493.png"
                alt="pizza" />
                {/* <h1 className="flex justify-center items-center">Chicken</h1> */}
                <p></p>
              </div>
              <div  className=" ml-1">
                <img className="rounded-md  w-80 h-80 object-cover"
                src="https://b.zmtcdn.com/data/collections/5855a69f15923993f1f20925a07e581f_1692344266.png"
                alt="pizza" />
                {/* <h1 className=" flex justify-center items-center">Paratha</h1> */}
                <p></p>
              </div>
              <div className=" ml-1"> 
                <img className= " rounded-md w-80 h-80 object-cover"
                src="https://b.zmtcdn.com/data/collections/cb441382af822ed30451d127d4a9eb76_1682690432.jpg"
                alt="pizza" />
                {/* <h1 className="flex justify-center items-center">Fried  Rice</h1> */}
                <p></p>
              </div>
            </Carousel>
          </div>

        </div>
    );
  };

export default DiningOutCollections;