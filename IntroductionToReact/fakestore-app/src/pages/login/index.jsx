import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, validateYupSchema } from "formik";
import * as yup from "yup";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);

  const shape = {
    username: yup.string().required("Username belum diisi"),
    password: yup.string().required("Password belum diisi"),
  };

  const userCredentials = yup.object().shape(shape);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: userCredentials,
    onSubmit: (values) => {
      console.log(values);
      // navigate("/");
    },
  });

  console.log("visible ", visibility);

  return (
    <Layout>
      <form
        onSubmit={formik.handleSubmit}
        className="w-96 grid grid-cols-1 gap-y-5"
      >
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
