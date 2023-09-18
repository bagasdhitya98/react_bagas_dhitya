import React, {useState} from 'react'

import Layout from '../../components/Layout'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [visibility, setVisibility] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("username : ", username)
    console.log("password : ", password)
  }

  console.log("visible ", visibility)

  return (
    <Layout>
      <form 
      onSubmit={handleSubmit}
      className='w-96 grid grid-cols-1 gap-y-5'>
          <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder="Type your username here ..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
           <Input
          id="password"
          name="password"
          type={visibility === true ? "text" : "password"}
          label="Password"
          placeholder="Type your password here ..."
          value={password}
          visibility={visibility}
          onVisible={() => setVisibility(!visibility)}
          onChange={(e) => setPassword(e.target.value)}
          />
          <Button
          id="submit"
          type="submit"
          label="Submit"
          />
      </form>
    </Layout>
  )
}

export default Login