import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div style={{ backgroundColor: '#F8D6DA', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">About Our E-Commerce App</h1>
          <p className="lead">
            A seamless shopping experience built for simplicity, speed, and satisfaction.
          </p>
        </div>

        {/* Description */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="fs-5">
              Our e-commerce application empowers users to explore thousands of products, compare prices,
              and make purchases from the comfort of their home. From electronics and fashion to daily essentials,
              everything you need is just a click away.
            </p>

            <h4 className="mt-4">✨ Features You’ll Love</h4>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item" style={{ backgroundColor: '#f2f2f2' }}>
                🛍️ Browse a wide range of products across categories
              </li>
              <li className="list-group-item" style={{ backgroundColor: '#f2f2f2' }}>
                🔍 Search and filter to find exactly what you need
              </li>
              <li className="list-group-item" style={{ backgroundColor: '#f2f2f2' }}>
                🛒 Add to cart, manage items, and place orders easily
              </li>
              <li className="list-group-item" style={{ backgroundColor: '#f2f2f2' }}>
                📦 Track your orders in real time
              </li>
              <li className="list-group-item" style={{ backgroundColor: '#f2f2f2' }}>
                🔐 Secure checkout with multiple payment methods
              </li>
              <li className="list-group-item" style={{ backgroundColor: '#f2f2f2' }}>
                📞 Customer support for returns and order issues
              </li>
            </ul>

            <p className="text-muted">
              Join thousands of satisfied customers using our platform to shop smarter and faster every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
