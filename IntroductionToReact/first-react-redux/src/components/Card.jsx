import React from "react";

const Card = ({ id, image, title, price, description, onClick }) => {
  return (
    <div id={id} className="w-full h-full rounded-md shadow-md p-5">
      <div className="flex gap-x-5 my-5">
        <img className="w-40 h-40" src={image} />
        <div className="flex flex-col">
          <p className="font-semibold">{title}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>Price : ${price}</p>
        <button
          className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none border-none"
          onClick={onClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Card;
