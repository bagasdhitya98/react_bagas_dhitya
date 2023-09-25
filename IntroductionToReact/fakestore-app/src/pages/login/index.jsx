import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import Cookies from "js-cookie";
import * as yup from "yup";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [visibility, setVisibility] = useState(false);

  const shape = {
    email: yup.string().required("Email belum diisi"),
    password: yup.string().required("Password belum diisi"),
  };

  const userCredentials = yup.object().shape(shape);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userCredentials,
    onSubmit: async (values) => {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        Cookies.set("accessToken", response?.user?.accessToken);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Layout mode={theme}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-96 grid grid-cols-1 gap-y-5"
      >
        <Input
          id="email"
          name="email"
          type="text"
          label="Email"
          placeholder="Type your email here ..."
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          id="password"
          name="password"
          type={visibility === true ? "text" : "password"}
          label="Password"
          placeholder="Type your password here ..."
          value={formik.values.password}
          visibility={visibility}
          onVisible={() => setVisibility(!visibility)}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button id="submit" type="submit" label="Submit" />
      </form>
    </Layout>
  );
};

export default Login;
