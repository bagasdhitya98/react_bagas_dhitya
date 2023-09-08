import React, { Component } from 'react'
import { withRouter } from '../../withRouterr'

 class Landing extends Component {
  render() {

    const {navigate} = this.props

    return (
      <section className='w-screen h-screen flex justify-center items-center'>
        <div className='my-auto'>
            <button
            onClick={() => navigate('/home')}
            className='focus:outline-none border-none w-40 h-20 bg-lime-500 text-white'
            >Navigate to Home</button>
        </div>
      </section>
    )
  }
}

export default withRouter(Landing)
