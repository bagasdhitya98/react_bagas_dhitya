import React, { Component } from 'react'

 class NewsCard extends Component {
  render() {

    const {id, author, title, image, description, onClick} = this.props
    return (
      <div id={id} className='card w-96 bg-white shadow-md'>
        <div>
        <img src={image !== null ? image : "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc"} width={500} height={100} />
        </div>
        <div className='card-body flex flex-col gap-y-5'>
            <p className='font-semibold text-lime-600'>{title}</p>
            <p className='text-lime-500'>{description}</p>
            <p className='font-semibold text-lime-600'>Author : {author !== null ? author : "Anonymous"}</p>
            <button className='w-40 h-10 bg-lime-500 text-center flex justify-center items-center text-white'
            onClick={onClick}
            >See Details</button>
        </div>
      </div>
    )
  }
}

export default NewsCard