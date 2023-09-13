import React from 'react'

import Button from './Button'

const Card = ({id, title, price, image, onClick}) => {
  return (
    <div
    id={id}
    className='w-80 h-96 bg-white rounded-md shadow-md grid grid-cols-1 gap-y-10'
    >
        <img
         src={image}
        className='w-32 h-32 mx-auto'
        />
        <h2 className='font-semibold flex overflow:hidden'>{title}</h2>
        <p className='font-semibold'>Price : ${price}</p>
        <div className='w-40 flex mx-auto'>
        <Button id={'details'} label={'Lihat Detail'} onClick={onClick}/>
        </div>

    </div>
  )
}

export default Card