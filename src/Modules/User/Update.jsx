import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../css/Update.css';

function Update() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const userJson = localStorage.getItem("user");
  const { username, userId, name, password, email, address, mobileno } = JSON.parse(userJson);

  useEffect(() => {
    setValue('userId', userId);
    setValue('name', name);
    setValue('username', username);
    setValue('email', email);
    setValue('password', password);
  }, [userId, setValue]);

  const updateData = (data) => {
    axios.put('http://localhost:9294/user/updateAll/${userId}', data);
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="update-wrapper">
      <div className="update-card">
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit(updateData)}>
          <label className="form-label">User ID</label>
          <input type="number" className="form-control" {...register("userId")} readOnly />

          <label className="form-label">Name</label>
          <input type="text" className="form-control" {...register("name", { required: true })} />

          <label className="form-label">Username</label>
          <input type="text" className="form-control" {...register("username", { required: true })} />

          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />

          <label className="form-label">Password</label>
          <input type="text" className="form-control" {...register("password", { required: true })} />

          <button type="submit" className="btn btn-success mt-3">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;