import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { app } from "../../../firebase";
import * as yup from "yup";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [visibility, setVisibility] = useState(false);

  const shape = {
    email: yup.string().required("Email belum diisi"),
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
    onSubmit: async (values) => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(response?.data);
        navigate("/fakestore/auth/login");
      } catch (error) {
        console.log(error);
      }
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

export default Register;
