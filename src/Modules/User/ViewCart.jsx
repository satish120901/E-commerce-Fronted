import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ViewCart() {
  const userJson = localStorage.getItem("user");
    const {userId} = JSON.parse(userJson);
  const [data, setData] = useState({
    userId: '',
    orderSummary: {
      orderedProduct: [],
      grandTotal: 0
    },
    cartSummary: {
      cartProduct: [],
      totalPrice: 0
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:9294/user/view_Cart/${userId}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
 return (
    <div>
      <h2>User ID: {userId}</h2>
     <h1>Products</h1>
       <div className='item-container'>
        {data.cartSummary.cartProduct.map((product, index) => (
          <tr key={index}>
          <div className='card'>
            <img src={'data:image/jpeg;base64,'+product.image} height={60} width={60} alt='' />
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>{product.brand}</p>
            <p>{product.price}</p>
          </div>
   </tr>
   
   ))}
   </div>
   </div>
  );
}
export default ViewCart;