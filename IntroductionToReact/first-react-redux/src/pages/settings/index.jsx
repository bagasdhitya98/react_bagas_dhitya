import React from "react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="my-10 text-white hover:bg-blue-600 focus:outline-none bg-blue-500 flex justify-center items-center w-20 h-10"
      >
        Back
      </button>
      <div className="w-1/2 h-max rounded-md shadow-md">
        <div className="p-10 flex flex-col gap-5">
          <a className="no-outline cursor-pointer hover:text-blue-600 text-blue-500">
            Bahasa
          </a>
          <a className="no-outline cursor-pointer hover:text-blue-600 text-blue-500">
            Logout
          </a>
        </div>
      </div>
    </section>
  );
};

export default Setting;
