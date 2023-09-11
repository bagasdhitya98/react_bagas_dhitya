import React, { Component } from 'react'

import {withRouter} from '../../withRouterr'
import NewsCard from '../../components/NewsCard'
import Button from '../../components/Button'

import axios from 'axios'

class News extends Component {

  state = {
    data: [],
    categories: ""
  }

   async handleNews(categories){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${categories ? categories : 'sports'}&apiKey=027a0c86b59d4edaa9c304428b94a784`)
        .then((response) => {
          this.setState({data: response?.data?.articles})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.handleNews()
    }

  render() {

    const {data} = this.state
    const {navigate} = this.props

    return (
      <section className='w-screen h-screen flex flex-rows justify-center'>
        <div className='my-auto'>
          <div className='w-60 flex gap-x-5 mx-auto my-40'>
            <Button label={"Health"} onClick={() => this.handleNews('health')}/>
            <Button label={"Business"} onClick={() => this.handleNews('business')}/>
            <Button label={"Sports"} onClick={() => this.handleNews('sports')}/>
            <Button label={"Politics"} onClick={() => this.handleNews('politics')}/>
            <Button label={"Finance"} onClick={() => this.handleNews('finance')}/>
          </div>
          <div className='flex flex-wrap space-x-5 space-y-5 justify-center'>
        {
          data &&
          data.map((item, index) => {
            return(
              <NewsCard
              key={index}
              id={item?.source?.id}
              title={item?.title}
              author={item?.author}
              description={item?.description}
              image={item?.urlToImage}
              onClick={() => navigate(`/news/${item?.source?.id}`, {
                state: {
                  news: item
                }
              })}
              />
            )
          })
        }
        </div>
        </div>

      </section>
    )
  }
}

export default withRouter(News)
