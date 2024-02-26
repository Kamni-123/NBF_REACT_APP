import React from 'react'

const Deliveryitem = ({item , key }) => {
  return <div className='' key={key}>
        <div className=''>
            <img src={item.cover} className='' alt={item.title}/>

        </div>
      
    </div>
  
}

export default Deliveryitem;
