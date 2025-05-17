import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">Admin Module - E-Commerce Management</h4>
            </div>
            <div className="card-body bg-white">
              <p className="card-text">
                The <strong>Admin Module</strong> is a centralized interface that allows administrators to manage and control all aspects of the e-commerce platform. It acts as a control panel to ensure smooth operations and system maintenance.
              </p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">
                  <strong>Employee Login:</strong> Secure authentication for platform admins.
                </li>
                <li className="list-group-item">
                  <strong>Service Monitoring:</strong> Check the status of microservices and logs.
                </li>
                <li className="list-group-item">
                  <strong>User Management:</strong> View, block, or delete customer accounts.
                </li>
                <li className="list-group-item">
                  <strong>Product Management:</strong> Add, update, or remove product listings.
                </li>
                <li className="list-group-item">
                  <strong>Order & Payment Oversight:</strong> Manage orders and verify payments.
                </li>
                <li className="list-group-item">
                  <strong>Review Moderation:</strong> Monitor and manage product reviews.
                </li>
              </ul>
              <p className="card-text">
                This module ensures that only authorized personnel can access sensitive features of the system and enables smooth coordination across all backend services.
              </p>
              <div>
                <Link to="/login" className="btn btn-dark">
                  Admin Login
                </Link>
              </div>
              <p className="text-danger mt-3">
                <strong>Note:</strong> You must be logged in to access the admin dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
