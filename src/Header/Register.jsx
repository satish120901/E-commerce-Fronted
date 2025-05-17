import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import '../css/register.css'

function Register() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  function saveData(data) {
    axios.post('http://localhost:9294/user/save_User', data)
      .then(() => {
        reset();
      });
  }

  return (
    <div className="register-container">
      <div className="form-space">
        <form onSubmit={handleSubmit(saveData)}>
          <h3>Create an account</h3>
          <div className="mb-3">
            <label>Full Name</label>
            <input type="text" {...register("name")} className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label>Email Address</label>
            <input type="text" {...register("email")} className="form-control" placeholder="Enter email-id" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" {...register("password")} className="form-control" placeholder="Enter password" />
          </div>
          <div className="mb-3">
            <label>User Name</label>
            <input type="text" {...register("username")} className="form-control" placeholder="Enter username" />
          </div>
          {/* <div className="mb-3">
            <label>Address</label>
            <input type="text" {...register("address")} className="form-control" placeholder="Enter address" />
          </div>
          <div className="mb-3">
            <label>Mobile No</label>
            <input type="number" {...register("mobileno")} className="form-control" placeholder="Enter number" />
          </div> */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/sign-in">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;