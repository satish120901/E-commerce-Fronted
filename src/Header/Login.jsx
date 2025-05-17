import React, { useState } from 'react';
 import '../css/Login.css';
 import axios from "axios";
 import { useNavigate } from "react-router-dom";
 import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const {register, handleSubmit} = useForm();
 const navigate = useNavigate();
  function onLogin(data)
  {
  alert("Logged in ...!!");
  console.log(data);

  axios.get(`http://localhost:9294/user/loginUser/${data.username}/${data.password}`)
  .then((res)=>{
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
     navigate('/dashboard');
   })
  .catch((error)=>console.log(error));
 }
  return (
    <div className="login-wrapper" >
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit(onLogin)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter Username"
                value={username}
                 {...register('username')}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                 {...register('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          </div>
          </div>
  );
}

export default Login;