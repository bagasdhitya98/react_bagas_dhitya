import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../features/cartSlice";
import axios from "axios";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [products, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get("products")
      .then((response) => {
        const filteredData = response.data.slice(0, 10);
        setProduct(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckout = (item) => {
    const newItem = {
      id: item?.id,
      title: item?.title,
      image: item?.image,
      description: item?.description,
      price: item?.price,
      quantity: item?.quantity,
    };
    dispatch(addItem(newItem));
    navigate("/cart");
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log("hasil dari redux : ", items);

  return (
    <section>
      <Navbar />
      <section className="w-screen h-screen flex flex-col justify-center items-center my-60">
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {products &&
            products?.map((item, index) => {
              return (
                <div key={index} className="w-full h-max">
                  <Card
                    id={item?.id}
                    title={item?.title}
                    image={item?.image}
                    description={item?.description}
                    price={item?.price}
                    onClick={() => handleCheckout(item)}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default Product;
