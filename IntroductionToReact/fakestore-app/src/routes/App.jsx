import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from '../pages/login'
import Home from '../pages/home'

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/fakestore/auth/login'/>
        <Route element={<Home/>} path='/'/>
      </Routes>
   </BrowserRouter>
  )
}

export default App