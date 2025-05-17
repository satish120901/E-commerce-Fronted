import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Viewemployee() {
  const [employee, setEmployee] = useState([]);

  function getData() {
    axios.get("http://localhost:9293/employee/getEmployees")
      .then(res => setEmployee(res.data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">View Employees</h2>
      <div className="table-responsive mx-auto" style={{ maxWidth: "95%" }}>
        <table className="table table-bordered table-striped align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Username</th>
              <th>Employee Email</th>
              <th>Employee Password</th>
              <th>Inventory Role</th>
              <th>Role</th>
              <th>Phone Number</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {employee.map(e => (
              <tr key={e.empId}>
                <td>{e.empId}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.inventoryRole}</td>
                <td>{e.role}</td>
                <td>{e.phoneNumber}</td>
                <td>
                  <img
                    src={'data:image/jpeg;base64,' + e.imageFile}
                    alt="Employee"
                    style={{ width: '100px', height: 'auto' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewemployee;
