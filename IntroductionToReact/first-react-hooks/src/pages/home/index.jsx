import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import axios from "axios";

import Card from "../../components/Card";

const Home = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const username = location?.state?.dataUsername
  const [data, setData] = useState()

  const getAllProduct = () => {
    axios.get('products')
    .then((response) => {
      setData(response?.data)
    })
    .catch((error) => {
     Swal.fire({
      icon:'error',
      title: 'Gagal mengambil data',
      text: `Pesan kesalahan : ${error}`,
      confirmButtonText: "OK"
     })
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
     <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
      {
        data &&
        data.map((item, index) => {
          return(
            <Card
            key={index}
            id={item?.id}
            title={item?.title}
            price={item?.price}
            image={item?.image}
            onClick={() => navigate(`/detail/${item?.id}`, {
              state: {
                itemId: item?.id
              }
            })}
            />
          )
        })
      }
     </div>
    </section>
  )
};

export default Home;
