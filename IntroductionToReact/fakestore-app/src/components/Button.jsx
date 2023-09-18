import React from 'react'

const Button = ({id, label, type, onClick}) => {
  return (
    <button
        id={id}
        onClick={onClick}
        type={type}
        className='w-full h-14 text-white font-semibold bg-orange-500 hover:bg-orange-600 focus:outline-none border-none'
    >
        {label}
    </button>
  )
}

export default Button