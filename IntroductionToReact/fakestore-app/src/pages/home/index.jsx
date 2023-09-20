import React, { useState } from "react";
import Cookies from "js-cookie";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";

const Home = () => {
  const email = Cookies.get("email");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <Navbar email={email} />
      <Layout>
        <div className="w-60 h-20">
          <Button
            id="show-popup"
            label="Show Popup"
            onClick={() => setIsOpen(true)}
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
