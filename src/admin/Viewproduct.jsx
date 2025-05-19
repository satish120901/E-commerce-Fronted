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
      <h2 className="mb-4 text-center text-primary">View Products</h2>
      <div className="table-responsive">
        <table className="table table-bordered align-middle table-hover">
          <thead className="text-center" style={{ backgroundColor: '#0d6efd', color: 'white' }}>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
           {product.map((e, index) => (
              <tr key={e.productId} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff' }}>
                <td>{e.productId}</td>
                <td>{e.productName}</td>
                <td>{e.brand}</td>
                <td>{e.category}</td>
                <td>₹{e.price.toFixed(2)}</td>
                <td className="text-center">
                  {e.productImages?.[0]?.imageData ? (
                    <img
                      src={`data:image/jpeg;base64,${e.productImages[0].imageData}`}
                      alt="Product"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                      }}
                    />
                  ) : (
                    <span className="text-muted">No Image</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewproduct;
