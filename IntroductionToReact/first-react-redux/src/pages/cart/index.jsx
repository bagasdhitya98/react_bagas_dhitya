import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log("cart : ", cart);

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      {cart ? (
        cart.items.map((item) => {
          return (
            <div className="w-1/2 h-screen rounded-md flex shadow-md my-10 grid grid-cols-2">
              <div className="rounded-md p-5">
                <img src={item?.image} width={200} height={200} />
              </div>
              <div className="flex flex-col gap-10 my-5">
                <div>
                  <p>{item?.title}</p>
                </div>
                <div className="font-semibold">
                  <p>Total Item : {item?.quantity}</p>
                  <p>Total Price : {item?.price}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeItem(item?.id))}
                className="w-40 h-10 bg-blue-500 hover:bg-blue-600 focus:outline-none border-none text-white"
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <div>Cart Not Available</div>
      )}
    </section>
  );
};

export default Cart;
