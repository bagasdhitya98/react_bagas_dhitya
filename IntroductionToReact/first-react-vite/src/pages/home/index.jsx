import React, { Component } from 'react'
import { withRouter } from '../../withRouterr'

class Home extends Component {
  render() {

    const {location} = this.props
    const userName = location?.state?.userName
    const userPassword = location?.state?.userPassword

    return (
      <section className='w-screen h-screen flex flex-col justify-center items-center'>
        <p>Your username is  : {userName ? userName : 'Anonymous'}</p>
        <p>Your password is  : {userPassword ? userPassword : 'Anonymous'}</p>
      </section>
    )
  }
}

export default withRouter(Home)
