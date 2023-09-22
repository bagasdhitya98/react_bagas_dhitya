import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

const Pin = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState();

  const handlePin = () => {
    sessionStorage.setItem("pin", number);
    navigate("/");
  };

  return (
    <Layout>
      <div className="mx-auto flex flex-col gap-y-5">
        <input
          className="w-full h-16 rounded-md border bg-white focus:outline-none px-3 text-center"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="mx-auto w-40">
          <Button label="OK" onClick={() => handlePin()} />
        </div>
      </div>
    </Layout>
  );
};

export default Pin;
