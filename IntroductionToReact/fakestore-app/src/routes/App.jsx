import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Pin from "../pages/pin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/fakestore/auth/login" />
        <Route element={<Register />} path="/fakestore/auth/register" />
        <Route element={<Pin />} path="/fakestore/auth/pin" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
