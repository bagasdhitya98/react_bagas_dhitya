import React, { useState } from "react";
import Swal from "sweetalert2";
// import Cookies from "js-cookie";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";

const Home = () => {
  // const email = Cookies.get("email");
  // const accessToken = Cookies.get("accessToken");
  const pin = sessionStorage.getItem("pin");
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    // if (accessToken) {
    //   setIsOpen(true);
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Failed",
    //     text: "You are not logged in",
    //     confirmButtonText: "OK",
    //   });
    // }
    if (pin) {
      setIsOpen(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "You are not logged in",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section>
      <Navbar email={"John Doe"} />
      <Layout>
        <div className="w-60 h-20">
          <Button
            id="show-popup"
            label="Show Popup"
            onClick={() => handleModal()}
          />
        </div>
        <Modal isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <div className="flex justify-center items-center w-96 h-80">
            This is your Popup!
          </div>
        </Modal>
      </Layout>
    </section>
  );
};

export default Home;
