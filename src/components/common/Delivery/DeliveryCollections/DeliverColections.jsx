import React from "react";
import Slider from "react-slick";
import Deliveryitem from "./Deliveryitem/Deliveryitem";
// import PrevArrow from "../../carousel/prevArrow";
// import NextArrow from "../../carousel/nextArrow";




const DeliveryItems = [
  {
    id: 1,
    title: "pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 3,
    title: "Burger",
    cover:
      "https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full",
  },
  {
    id: 4,
    title: "Veg Thali",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg",
  },
  {
    id: 5,
    title: "Chicken",
    cover:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    id: 6,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 7,
    title: "Fried Rice",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
  },
];

const settings = {
  infinite: false,
  
  slidesToShow: 4,
  slidesToScroll: 1,
  // nextArrow: <NextArrow/>,

  // prevArrow: <PrevArrow/> ,
};


const DeliverColections = () => {
  return (
    <div className="">
      <div className="max-w-full">
        <div className="text-black text-3xl font-semibold mt-10">
          Eat what makes you happy
        </div>
        <Slider {...settings}>
          {DeliveryItems.map((item , index) => {
            return <Deliveryitem item={item}  key={index}/>;
          })};
        </Slider>
      </div>
    </div>
  );
};

export default DeliverColections;
