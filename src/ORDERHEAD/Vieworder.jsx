import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Vieworder() {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const [orderSummary, setOrderSummary] = useState({});
 


  function getData(userId) {
     axios.get(`http://localhost:9294/user/view_Cart/${userId}`)
      .then(res => {
        const data = res.data;
        setOrderSummary(data.orderSummary || {});
        setOrders(data.orderSummary?.orderedProduct || []);
      })
      .catch(err => console.error(err));
  }
  useEffect(() =>{
    getData(userId)
  },[])
  

  return (
    <div className="container mt-4">
      <h2>Orders for User: {userId}</h2>

      <p><strong>Grand Total:</strong> ₹{Number(orderSummary.grandTotal || 0).toFixed(2)}</p>
      

      {orders.length > 0 ? (
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delivery Charges</th>
              <th>Total</th>
              <th>Order ID</th>
              <th>Request Amount</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(product => {
              const total = (product.productPrice * product.productQuantity) + (product.deliveryCharges || 0);
              return (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.productBrand}</td>
                  <td>{product.productQuantity}</td>
                  <td>₹{product.productPrice.toFixed(2)}</td>
                  <td>₹{(product.deliveryCharges || 0).toFixed(2)}</td>
                  <td>₹{total.toFixed(2)}</td>
                  <td>{product.orderId || "N/A"}</td> 
                  <td>{product.requestAmount ? `₹${Number(product.requestAmount).toFixed(2)}` : "N/A"}</td>
                  <td>{product.orderStatus || "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No orders found for this user.</p>
      )}
    </div>
  );
}

export default Vieworder;
