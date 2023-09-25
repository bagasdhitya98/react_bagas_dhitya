import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white rounded-md shadow-md w-screen py-7 sticky z-10 fixed top-0">
      <div className="flex justify-end items-center space-x-10 mr-10 text-blue-500 font-semibold">
        <a
          onClick={() => navigate("/product")}
          className="no-underline cursor-pointer w-20 h-10 hover:bg-blue-600 hover:text-white hover:font-semibold flex justify-center items-center rounded-md"
        >
          Product
        </a>
        <a
          onClick={() => navigate("/setting")}
          className="no-underline cursor-pointer w-20 h-10 hover:bg-blue-600 hover:text-white hover:font-semibold flex justify-center items-center rounded-md"
        >
          Setting
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
