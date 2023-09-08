import React, { Component } from 'react'

import Card from './components/Card'

class App extends Component {

  state = {
    count: 0,
    mode: false
  }

  handleIncrement(){
    const {count} = this.state
    this.setState({count: count + 1})
  }

  handleDecrement(){
    const {count} = this.state
    this.setState({count: count - 1})
    if(count == -1){
      alert('Out of bound')
    }
  }

  toggleMode(){
    const {mode} = this.state
    this.setState({mode: !mode})
  }
  
  render() {

    const {count, mode} = this.state

    return (
      <div className={`w-screen h-screen ${mode ? 'bg-black' : 'bg-white'} flex flex-col gap-y-10 justify-center items-center`}>
        <div className='flex gap-x-5'>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
          <button
            onClick={() => this.toggleMode()}
           className={`focus:outline-none w-40 h-10  ${mode ? 'bg-black text-white border border-white hover:border-white' : 'text-black bg-white border border-black hover:border-black'} flex justify-center items-center`}>
            {mode ? 'Night Mode' : 'Day Mode'}</button>
        </div>
        <div className='flex gap-x-5'>
          <button className='border-none focus:outline-none hover:bg-lime-700 rounded-xl bg-lime-600 text-white' onClick={() => this.handleIncrement()}>+</button>
          <input className='text-center focus:outline-none rounded-md h-12 border border-lime-600 bg-white' type="text" value={count} onChange={(e) => this.setState({count : e.target.value})}/>
          <button className='border-none focus:outline-none hover:bg-lime-700 rounded-xl bg-lime-600 text-white' onClick={() => this.handleDecrement()}>-</button>
        </div>
      </div>
    )
  }
}

export default App