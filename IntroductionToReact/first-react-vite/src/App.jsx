import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from './pages/landing'
import Home from './pages/home'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
           <Route element={<Landing/>} path='/'/>
           <Route element={<Home/>} path='/home'/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
