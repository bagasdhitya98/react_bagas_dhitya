import React from 'react'

const Card = ({id, title, price, image, desc}) => {
  return (
    <div
    id={id}
    className='w-80 h-full bg-white rounded-md shadow-md grid grid-cols-1 gap-y-10'
    >
        <img
         src={image}
        className='w-full h-32'
        />
        <h2 className='font-semibold'>{title}</h2>
        <p>{desc}</p>
        <p className='font-semibold'>Price : {price}</p>
    </div>
  )
}

export default Card