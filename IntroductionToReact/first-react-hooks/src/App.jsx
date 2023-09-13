import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from 'axios'

import Home from "./pages/home"
import Login from "./pages/login"
import Detail from "./pages/detail"

const App = () => {

  axios.defaults.baseURL = 'https://fakestoreapi.com/'

  return (
  <BrowserRouter>
      <Routes>
         <Route element={<Home/>} path="/"/>
         <Route element={<Detail/>} path="/detail/:id"/>
         <Route element={<Login/>} path="/login"/>
      </Routes>
  </BrowserRouter>
  )
}

export default App