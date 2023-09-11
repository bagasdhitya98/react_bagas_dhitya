import React, { Component } from 'react'
import { withRouter } from '../../withRouterr'

 class DetailNews extends Component {
  render() {

    const {location} = this.props
    const news = location?.state?.news

    console.log(news.content)

    return (
     <section className='w-screen h-screen jusitfy-center'>
        <p className='text-black'>{news.content}</p>
     </section>
    )
  }
}

export default withRouter(DetailNews)
