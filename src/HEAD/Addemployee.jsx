import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function Addemployee() {

    const {register,handleSubmit,setValue,reset,formState}=useForm();

    
    function onSubmit(data) {
      const employeeDetails={
        name:data.name,
        email:data.email,
        inventoryRole:data.inventoryRole,
        role:data.role,
        phoneNumber:data.phoneNumber
      }
        const formdata=new FormData()
        formdata.append("employeeData",JSON.stringify(employeeDetails))
        formdata.append("imageData",data.imageFile[0])
        console.log(data)
        alert("Employee Added Successfully...!")
        axios.post("http://localhost:9293/employee/postEmployee",formdata).then(res=>console.log(res.data))
    }
  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" {...register('name')} />
        </div>

       
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register('email')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Inventory Role</label>
          <select className="form-select" {...register('inventoryRole')}>
            <option value="">Select Role</option>
            <option value="HEAD">HEAD</option>
            <option value="ORDERDELIVERY_HEAD">ORDERDELIVERY_HEAD</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

      
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input type="text" className="form-control" {...register('role')} />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" {...register('phoneNumber')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" className="form-control" {...register('imageFile')} />
        </div>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
}

export default Addemployee;