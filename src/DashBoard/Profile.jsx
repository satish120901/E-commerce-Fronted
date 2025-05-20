import React from 'react';

function Profile() {
  const employeeJson = localStorage.getItem("employee");
  const userJson = localStorage.getItem("user");

  let username = "", imageFile = "", inventoryRole = "";
  let name = "", role = "";
  if (employeeJson) {
    const employee = JSON.parse(employeeJson);
    username = employee.username;
    imageFile = employee.imageFile;
    inventoryRole = employee.inventoryRole;
  } else if (userJson) {
    const user = JSON.parse(userJson);
    name = user.name;
    role = user.role;
  }

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card shadow-sm" style={{ width: '22rem', backgroundColor: '#e9f7fa' }}>
        <div className="card-body text-center">
          <h3 className="card-title text-primary mb-3">Profile</h3>

          {employeeJson && imageFile && (
            <img
              src={`data:image/jpeg;base64,${imageFile}`}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          )}

          {employeeJson ? (
            <>
              <h6 className="card-subtitle mb-1 text-muted">Username</h6>
              <p className="card-text fs-6 fw-medium">{username}</p>

              <h6 className="card-subtitle mb-1 text-muted">Role</h6>
              <p className="card-text fs-6">{inventoryRole}</p>
            </>
          ) : (
            <>
              <h6 className="card-subtitle mb-1 text-muted">Name</h6>
              <p className="card-text fs-6 fw-medium">{name}</p>

              <h6 className="card-subtitle mb-1 text-muted">Role</h6>
              <p className="card-text fs-6">{role}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

