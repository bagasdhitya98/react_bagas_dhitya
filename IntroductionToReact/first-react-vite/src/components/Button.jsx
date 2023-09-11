import React, { Component } from 'react'

 class Button extends Component {
  render() {

    const {label, onClick} = this.props

    return (
      <button className='w-full h-20 bg-lime-500 text-white flex justify-center items-center' onClick={onClick}>
        <label className='font-semibold'>{label}</label>
      </button>
    )
  }
}

export default Button
