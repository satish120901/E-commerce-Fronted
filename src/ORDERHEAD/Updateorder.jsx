import React, { useState } from 'react';
import axios from 'axios';

function Updateorder() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('PENDING');
  const [message, setMessage] = useState('');

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
    setMessage('');
  };

  const handleStatusChange = (e) => {
    setOrderStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!orderId || !orderStatus) {
      setMessage('Please enter both Order ID and Status.');
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:9294/user/order_Status/${orderId}/${orderStatus}`
      );
      setMessage(response.data || 'Order status updated successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to update order status. Please check Order ID.');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Update Order Status</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Order ID</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={handleOrderIdChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <select
            className="form-select"
            value={orderStatus}
            onChange={handleStatusChange}
          >
            <option value="PENDING">PENDING</option>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="CANCELLED">CANCELLED</option>
            <option value="DISPATCHED">DISPATCHED</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Update Status
        </button>
      </form>

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default Updateorder;
