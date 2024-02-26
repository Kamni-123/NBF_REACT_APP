import React from 'react'

const Filteritem = ({filter}) => {
  return (
    <div className='border  border-gray-300 whitespace-nowrap  hover:bg-gray-100 px-2 mr-2 ml-2 text-gray-600 bg-white shadow-sm rounded-lg flex items-center cursor-pointer h-full text-base'>
        {filter.icon && filter.icon}
        <div className='mt-1 mb-1'>{filter.title}</div>
    </div>
  )
} 

export default Filteritem