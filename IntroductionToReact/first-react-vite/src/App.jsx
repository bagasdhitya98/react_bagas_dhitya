import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Login from './pages/login'
import Home from './pages/home'
import News from './pages/news'
import DetailNews from './pages/detailNews'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
           <Route element={<Login/>} path='/'/>
           <Route element={<Home/>} path='/home'/>
           <Route element={<News/>} path='/news'/>
           <Route element={<DetailNews/>} path='/news/:id'/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
