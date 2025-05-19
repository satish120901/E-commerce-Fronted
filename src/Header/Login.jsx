import React from 'react';
import '../css/Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function onLogin(data) {
    const { username, password } = data;

   
    localStorage.removeItem("user");
    localStorage.removeItem("employee");

    axios.get(`http://localhost:9294/user/loginUser/${username}/${password}`)
      .then((res) => {
        console.log("User login successful:", res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate('/dashboard');
      })
      .catch(() => {
        axios.get(`http://localhost:9293/employee/login/${username}/${password}`)
          .then((res) => {
            console.log("Employee login successful:", res.data);
            localStorage.setItem("employee", JSON.stringify(res.data));
            navigate('/dashboard');
          })
          .catch(() => {
            alert("Invalid username or password.");
          });
      });
  }

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit(onLogin)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              {...register('username')}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password')}
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
