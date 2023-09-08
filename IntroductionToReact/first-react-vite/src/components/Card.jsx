import React, { Component } from 'react'

class Card extends Component {
  render() {

    const {title, price, image} = this.props

    return (
      <div className='w-80 h-38 flex rounded-md shadow-md'>
        <div className='p-5'>
        <img className='rounded-md w-32 h-40' src={image}/>
        </div>
        <div className='mx-auto mt-5'>
            <p className='font-reguler'>{title}</p>
            <p className='font-semibold'>{price}</p>
        </div>
      </div>
    )
  }
}

export default Card
