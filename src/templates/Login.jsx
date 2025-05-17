import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function onLogin(data) {
    alert('Logging In...');
    axios
      .get(`http://localhost:9293/employee/login/${data.username}/${data.password}`)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('employee', JSON.stringify(res.data));
        navigate('/dashboard');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: 'linear-gradient(135deg, #cfe2ff, #f8f9fa)' }}
    >
      <div className="card shadow p-4" style={{ width: '320px' }}>
        <h4 className="text-center text-primary mb-4">Employee Login</h4>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              {...register('username')}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              {...register('password')}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
