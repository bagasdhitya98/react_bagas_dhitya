import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil login',
      text: `Selamat datang, ${username}`,
      confirmButtonText: "OK"
    }).then((response) => {
      if(response.isConfirmed){
        navigate('/', {
          state: {
            dataUsername: username
          }
        })
      }
    })
  }

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div>
        <Input
          id={"username"}
          name={'username'}
          type={"text"}
          value={username}
          label={"Username"}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Type your username here ..."}
        />
          <Input
          id={"password"}
          name={'password'}
          type={"password"}
          value={password}
          label={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Type your password here ..."}
        />
        <Button
        id={'login'}
        label={'Login'}
        onClick={() => handleLogin()}
        />
      </div>
    </section>
  );
};

export default Login;
