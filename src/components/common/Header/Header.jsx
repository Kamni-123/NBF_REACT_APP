import React from "react";
import nbf_logo from "../images/nbff logo.png";
import { IoLocation } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import LoginPage from "../Login/Login";

const Header = () => {
  return (
    <nav className=" h-20 header flex  items-center">
      <img
        className="header-logo h-20 w-25  cursor-pointer"
        alt="Logo"
        src={nbf_logo}
      ></img>
      <div className=" flex justify-between shadow-md rounded-lg w-full">
        <div className=" flex items-center justify-center">
          <div className="  gap-4 justify-center items-center rounded-md p-2 flex">
            <div className=""><IoLocation /></div>
            <input
              className=" border-none  rounded-md p-1"
              type="loaction"
              placeholder="Madurai"
            />
            <div className=""><FaCaretDown/> </div>
          </div>
          <div class="border h-10 border-gray-300"></div>
          <div className=" gap-4 justify-center items-center rounded-md p-2 flex">
            <div><FaSearch /></div>
            <input className=" w-96 border-none rounded-md p-1"
             type="text" 
             placeholder="search for restaurants, cuisine and dishes..." 
            />
          </div>
          
          
        </div>
        <div className="flex gap-2 justify-center mr-3 items-center">
          <div className="flex items-center  justify-center p-4  leading-6 text-right align-middle font-light text-gray-600 cursor-pointer rounded-md py-2 px-3">
            Log in</div>
          <div className="flex items-center justify-between leading-6 text-right align-middle font-light text-gray-600 cursor-pointer rounded-md py-2 px-3 ">Sign in</div>
          </div>
      </div>
    </nav>
  );
};

export default Header;