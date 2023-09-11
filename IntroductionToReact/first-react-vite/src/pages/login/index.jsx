import React, { Component } from 'react'
import { withRouter } from '../../withRouterr'

import axios from 'axios'

 class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleLogin(){
      const body = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
      axios.post('https://reqres.in/api/login', body)
      .then((response) => {
        console.log(response?.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    // componentDidMount(){
    //   console.log("Component Did Mount")
    // }

    // componentDidUpdate(prevState){
    //   const {username} = this.state
    //   if(prevState.username !== username){
    //     console.log("State username berubah")
    //   }
    // }
    // componentWillUnmount(){
    //   console.log("Component Will Unmount")
    // }

  render() {
    const {email, password} = this.state

    return (
      <section className='w-screen h-screen flex justify-center items-center'>
        <div className='my-auto flex flex-col gap-y-5'>
            <input 
               placeholder='Type your email here...'
               type="text"
               className='w-60 h-10 p-3 border border-lime-500 focus:outline-none bg-white rounded-md'
               value={email}
               onChange={(e) => this.setState({email: e.target.value})}
            />
             <input 
                placeholder='Type your password here...'
                type="text" 
                className='w-60 h-10 p-3 border border-lime-500 focus:outline-none bg-white rounded-md'
                value={password}
                onChange={(e) => this.setState({password: e.target.value})}
            />
            <button
            onClick={() => this.handleLogin()}
            className='focus:outline-none border-none w-60 h-10 bg-lime-500 text-white'
            >Login</button>
        </div>
      </section>
    )
  }
}

export default withRouter(Login)
