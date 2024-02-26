import React from 'react'
import Filteritem from './filteritem/filteritem';

const Filters = ({filterList}) => {
  return (
    <div className=' flex items-center justify-center mt-8  max-w-min'>{filterList && filterList.map((filter) =>{
        return <Filteritem filter={filter}  key={filter.id}/>;
    })}
    </div>
  )
}

export default Filters