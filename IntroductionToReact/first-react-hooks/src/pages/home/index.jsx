import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {

  const location = useLocation()
  const username = location?.state?.dataUsername

  const getAllProduct = () => {
    axios.get('products')
    .then((response) => {
      console.log(response?.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllProduct()
  }, [])
  

  return(
    <section className="w-screen h-screen">
     <div className="w-full h-20 flex justify-between items-center text-orange-500">
      <p className="font-bold">Selamat Sore, {username}</p>
     </div>
    </section>
  )
};

export default Home;
