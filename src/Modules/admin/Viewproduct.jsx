import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Viewproduct() {
  const [product, setProduct] = useState([]);

  function getData() {
    axios.get("http://localhost:9292/product/getAll")
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">View Product</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-light text-center">
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map(e => (
              <tr key={e.productId}>
                <td>{e.productId}</td>
                <td>{e.productName}</td>
                <td>{e.brand}</td>
                <td>{e.category}</td>
                <td>{e.price}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewproduct;
