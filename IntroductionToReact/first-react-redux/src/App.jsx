import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Detail from "./pages/detail";
import Product from "./pages/product";
import Setting from "./pages/settings";
import Cart from "./pages/cart";

const App = () => {
  axios.defaults.baseURL = "https://fakestoreapi.com/";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Product />} path="/product" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Detail />} path="/detail" />
        <Route element={<Setting />} path="/setting" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
