import React from 'react'

const Input = ({id, label, name, type, placeholder, value, onChange}) => {
  return (
   <div className='mb-4'>
    <label className='block text-gray-700 font-semibold mb-2'>{label}</label>
    <input
    id={id}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className='focus:outline-none shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-light bg-white'
    />
   </div>
  )
}

export default Input