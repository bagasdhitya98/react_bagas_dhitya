import React, { Component } from 'react'
import { withRouter } from '../../withRouterr'

 class Login extends Component {

    state = {
        username: "",
        password: ""
    }

  render() {
    const {navigate} = this.props
    const {username, password} = this.state

    return (
      <section className='w-screen h-screen flex justify-center items-center'>
        <div className='my-auto flex flex-col gap-y-5'>
            <input 
               placeholder='Type your username here...'
               type="text"
               className='w-60 h-10 p-3 border border-lime-500 focus:outline-none bg-white rounded-md'
               value={username}
               onChange={(e) => this.setState({username: e.target.value})}
            />
             <input 
                placeholder='Type your password here...'
                type="text" 
                className='w-60 h-10 p-3 border border-lime-500 focus:outline-none bg-white rounded-md'
                value={password}
                onChange={(e) => this.setState({password: e.target.value})}
            />
            <button
            onClick={() => navigate('/home', {
                state: {
                    userName: username,
                    userPassword: password
                }
            })}
            className='focus:outline-none border-none w-60 h-10 bg-lime-500 text-white'
            >Login</button>
        </div>
      </section>
    )
  }
}

export default withRouter(Login)
