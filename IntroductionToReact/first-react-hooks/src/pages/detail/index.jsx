import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

const Detail = () => {

    const location = useLocation()
    const id = location?.state?.itemId
    const [data, setData] = useState()

    const getProduct = () => {
        axios.get(`products/${id}`)
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
        getProduct()
    }, [])
    

  return (
    <section className="w-screen h-screen flex justify-center items-center">
        <div className="flex gap-x-5 mx-40">
            <img className="rounded-md" width={300} height={300} src={data?.image}/>
            <div className="flex flex-col gap-y-8">
                <p>{data?.description}</p>
                <p className="font-semibold">Price : ${data?.price}</p>
            </div>
        </div>
    </section>
  )
}

export default Detail