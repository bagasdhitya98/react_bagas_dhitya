import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className='w-80 h-38 flex rounded-md shadow-md'>
        <div className='p-5'>
        <img className='rounded-md' width={150} height={150} src='https://imgs.search.brave.com/rU4kUXZ6j2jUZZAuCfSc4hMnWX2NLiCcVlKsVzrncfg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vLWNk/bi1jYXMuc2lyY2xv/Y2RuLmNvbS9wYXJl/bnRpbmcvaW1hZ2Vz/L3NhdGVfdGFpY2hh/bl9rdWxpdC53aWR0/aC04MDAuZm9ybWF0/LXdlYnAud2VicA'/>
        </div>
        <div className='mx-auto my-auto'>
            <p className='font-reguler'>Sate Taichan</p>
            <p className='font-semibold'>Rp 25,000</p>
        </div>
      </div>
    )
  }
}

export default Card
