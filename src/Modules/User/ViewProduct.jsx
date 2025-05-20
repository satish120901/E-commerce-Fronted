import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/ViewCart.css'
function ViewProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:9294/user/search_Product`)
      .then(response => {
        setProducts(response.data);
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
   <div className="product-container"style={{ backgroundColor: '#f2f2f2' ,border:"1px"}}>
      {products.map((product, index) => (
        <div key={product.productId}>
           {product.productImages && product.productImages.length > 0 && (
<img src={`data:image/jpeg;base64,${product.productImages[0].imageData}`} alt={product.productName}style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          )}
 <p style={{fontSize:"11px"}}>{product.productName}</p>
          <p style={{fontSize:"11px"}}>Brand: {product.brand}</p>
          <p style={{fontSize:"11px"}}>Price: ${product.price}</p>
          <p style={{fontSize:"11px"}}>Quantity Available: {product.quantityAvailable}</p>
          <p style={{fontSize:"11px"}}>Supplier: {product.supplierName}</p>
          <p style={{fontSize:"11px"}}>Warranty Period: {product.warrantyPeriod} months</p>
          <p style={{fontSize:"11px"}}>Available: {product.available ? 'Yes' : 'No'}</p>
 {/* <h4>Product Features:</h4>
          <ul>
            {product.productFeatures && product.productFeatures.map((feature, index) => (
              <li key={feature.featuresId}>
                <strong>{feature.feature}</strong>: {feature.featureDescription}
              </li>
            ))}
          </ul>
          <h4>Product Reviews:</h4>
          <ul>
            {product.productReviews && product.productReviews.map((review, index) => (
              <li key={review.reviewId}>
                <strong>{review.reviewbyCustomername}</strong> ({review.starRating}/5)
                <p>{review.reviewMessage}</p>
              </li>
            ))}
          </ul> */}
          <button>Buynow</button>
        </div>
      ))}
    </div>
  );
}
export default ViewProduct;