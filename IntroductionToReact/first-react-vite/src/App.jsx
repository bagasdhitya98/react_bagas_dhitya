import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Login from './pages/login'
import Home from './pages/home'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
           <Route element={<Login/>} path='/'/>
           <Route element={<Home/>} path='/home'/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
