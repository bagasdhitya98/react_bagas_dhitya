import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Detail from "./pages/detail";
import Product from "./pages/product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Product />} path="/product" />
        <Route element={<Detail />} path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
