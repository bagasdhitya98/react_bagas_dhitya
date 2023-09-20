import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import * as yup from "yup";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);

  const shape = {
    email: yup
      .string()
      .required("Email belum diisi")
      .matches(
        "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9,-]+.[A-Za-z](2,4)$/",
        "Email tidak valid"
      ),
    username: yup.string().required("Username belum diisi"),
    password: yup.string().required("Password belum diisi"),
  };

  const userCredentials = yup.object().shape(shape);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: userCredentials,
    onSubmit: (values) => {
      Cookies.set("username", values.username, { path: "/" });
      navigate("/");
    },
  });

  return (
    <Layout>
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
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder="Type your username here ..."
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
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
