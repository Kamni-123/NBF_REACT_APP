// eslint-disable-next-line
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import NextArrow from "../../carousel/carosalitem/NextArrow";

// import PrevArrow from "../../carousel/carosalitem/PrevArrow";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const deliveryItems = [
//   {
//     id: 1,
//     title: "pizza",
//     cover:
//       "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
//   },
//   {
//     id: 2,
//     title: "Biryani",
//     cover:
//       "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
//   },
//   {
//     id: 3,
//     title: "Burger",
//     cover:
//       "https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full",
//   },
//   {
//     id: 4,
//     title: "Veg Thali",
//     cover:
//       "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg",
//   },
//   {
//     id: 5,
//     title: "Chicken",
//     cover:
//       "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
//   },
//   {
//     id: 6,
//     title: "Paratha",
//     cover:
//       "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
//   },
//   {
//     id: 7,
//     title: "Fried Rice",
//     cover:
//       "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
//   },
// ];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
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
// const settings = {

// infinite: false,
// slidesToShow: 4,
// slidesToScroll: 1,
// nextArrow: <NextArrow/>,
//     // prevArrow: <PrevArrow/>,
//   };
const DeliveryCollections = () => {
  return (
    <div className="delivery-collections  ml-1 mt-2">
      
        <div className="text-2xl font-semibold bg-gray-100 pl-4 pt-4 mt-7  text-gray-500">
          Inspiration for today's delivery!
          <Carousel   className="pb-6 bg-gray-100 pt-7" responsive={responsive}>
            <div  className=" ml-5">
                <div className=" flex justify-centre items-center">
              <img className=" rounded-full w-40 flex justify-center items-center"
                src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
                alt="pizza"
              />
              </div>
              <h1 className="flex justify-center items-center ">Pizza</h1>
              <p></p>
            </div>
            <div  className=" ml-5 ">
              <img className=" w-40 rounded-full flex justify-center items-center"
              src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
              alt="pizza" />
              <h1 className="flex justify-center items-center">Biryani</h1>
              <p></p>
            </div>
            <div  className=" ml-6">
              <img className="rounded-full px-1.5 w-40 flex justify-center items-center"
              src="https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full"
              alt="pizza" />
              <h1 className="flex justify-center items-center ">Burger</h1>
              <p></p>
            </div>
            <div className=" ml-6" >
              <img className="rounded-full  w-40 flex justify-center items-center"
              src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
              alt="pizza" />
              <h1 className="flex justify-center items-center ">Cake</h1>
              <p></p>
            </div>
            <div className=" ml-6" >
              <img className="rounded-full  w-40 flex justify-center items-center"
              src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
              alt="pizza" />
              <h1 className="flex justify-center items-center">Chicken</h1>
              <p></p>
            </div>
            <div  className=" ml-6">
              <img className="rounded-full  w-40 flex justify-center items-center"
              src="https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
              alt="pizza" />
              <h1 className=" flex justify-center items-center">Paratha</h1>
              <p></p>
            </div>
            <div className=" ml-6"> 
              <img className=" rounded-full w-40 flex justify-center items-center"
              src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
              alt="pizza" />
              <h1 className="flex justify-center items-center">Fried  Rice</h1>
              <p></p>
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

export default DeliveryCollections;
