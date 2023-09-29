import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(setUser(user));
    // navigate("/product");
  };

  return (
    <section className="w-screen h-screen justify-center items-center flex">
      <form onSubmit={handleLogin} className="grid grid-cols-1 gap-y-3">
        <label htmlFor="username" className="text-blue-500 font-semibold">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
          type="text"
          className="bg-white rounded-md border border-blue-500 h-10 px-3"
        />
        <label htmlFor="password" className="text-blue-500 font-semibold">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          type="password"
          className="bg-white rounded-md border border-blue-500 h-10 px-3"
        />
        <button
          type="submit"
          id="submit"
          className="mt-16 h-10 bg-blue-500 hover:bg-blue-600 focus:outline-none border-none text-white font-semibold"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
