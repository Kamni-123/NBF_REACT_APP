import React from 'react'
import nbf_logo from "../images/nbff logo.png"
const Header = () => {
  return (
    <nav  className=" h-20 header flex justify-between items-center">
    <img className="header-logo h-20 w-25  cursor-pointer" alt="Logo" src={nbf_logo} />
    <div className='grid grid-cols-2 gap-1 mr-5'>
    <div className='border p-2 rounded-md bg-black text-lg text-white hover:bg-white hover:text-black  '>about us</div>
    <div className='border p-2  rounded-md bg-black text-lg text-white hover:bg-white hover:text-black'>search </div> 
    
    </div>
    </nav>
  );
};

export default Header;