import React from "react";


const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    backdrop: "grey",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Diningout",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "grey",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "#E23744 ",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];

const TabOption = ({ activeTab, setActiveTab}) => {
  return (
    <div className="border-b border-gray-300 will-change-scroll">
      <div className="flex mr-10 px-6">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveTab(tab.name)}
              className={`flex mr-5 ml-5 items-center justify-center cursor-pointer pb-4 hover:border-b border-red-600  ${
                activeTab === tab.name && "activeTab"
              }`}
            >
              <div
                className={`pt-7 w-1/2 margin-auto ${
                  activeTab === tab.name ? `bg-${tab.backdrop}` : ""
                }`}
              >
                <img
                  src={
                    activeTab === tab.name ? tab.active_img : tab.inactive_img
                  }
                  alt={tab.name}
                  className=" flex justify-center items-center  rounded-md  ml-7 pb-0 w-11 h-11"
                />
              </div>
              <div className="ml-2 text-lg pt-7 text-gray-500 font-medium hover:text-red-600 ">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabOption;