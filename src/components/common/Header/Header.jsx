import React from "react";
import nbf_logo from "../images/nbff logo.png";
import { IoLocation } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="header flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
      <img
        className="header-logo h-12 w-auto cursor-pointer"
        alt="Logo"
        src={nbf_logo}
      />
      <div className="flex items-center rounded-md shadow-2xl">
        <div className="flex items-center rounded-md  mr-2 p-1">
          <IoLocation />
          <input
            className="border-none rounded-md p-1 ml-1"
            type="loaction"
            placeholder="Madurai"
          />
          <FaCaretDown />
          <div className="border ml-2 h-9"></div>
        </div>
        <div className="flex items-center rounded-md p-1">
          <FaSearch />
          <input
            className="w-32 md:w-48 border-none rounded-md p-1 ml-1"
            type="text"
            placeholder="Search for restaurants.."
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-gray-600 cursor-pointer">Log in</div>
        <div className="text-gray-600 cursor-pointer">Sign in</div>
      </div>
    </nav>
  );
};

export default Header;
