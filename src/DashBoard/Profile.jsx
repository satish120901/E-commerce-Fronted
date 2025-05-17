import React from 'react';

function Profile() {
  const employeeJson = localStorage.getItem("employee");
  const { username, imageFile, inventoryRole } = JSON.parse(employeeJson);

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card shadow-sm" style={{ width: '22rem', backgroundColor: '#e9f7fa' }}>
        <div className="card-body text-center">
          <h3 className="card-title text-primary mb-3">Profile</h3>

          {imageFile && (
            <img
              src={`data:image/jpeg;base64,${imageFile}`}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          )}

          <h6 className="card-subtitle mb-1 text-muted">Username</h6>
          <p className="card-text fs-6 fw-medium">{username}</p>

          <h6 className="card-subtitle mb-1 text-muted">Role</h6>
          <p className="card-text fs-6">{inventoryRole}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
