import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";

const Product = () => {
  const user = useSelector((state) => state.auth.user);
  const language = useSelector((state) => state.mode.language);

  console.log("user : ", user);

  return (
    <section>
      <Navbar />
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="mx-auto">
          {language
            ? "This sentences will be changed if Redux was triggered"
            : " Kalimat ini bisa berubah seiring dengan perubahan Redux"}
        </div>
        <div className="mx-auto">
          {language
            ? "This sentences will be changed if Redux was triggered"
            : " Kalimat ini bisa berubah seiring dengan perubahan Redux"}
        </div>
        <div className="mx-auto">
          {language
            ? "This sentences will be changed if Redux was triggered"
            : " Kalimat ini bisa berubah seiring dengan perubahan Redux"}
        </div>
      </section>
    </section>
  );
};

export default Product;
