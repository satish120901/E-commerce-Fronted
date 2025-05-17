import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function AddProduct() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    const product = {
      productName: data.productName,
      description: data.description,
      brand: data.brand,
      category: data.category,
      price: parseFloat(data.price),
      quantityAvailable: parseInt(data.quantityAvailable),
      supplierName: data.supplierName,
      supplierContact: data.supplierContact,
      warrantyPeriod: parseInt(data.warrantyPeriod),
      available: !!data.available,
      productFeatures: [
        { feature: data.feature1, featureDescription: data.featureDesc1 },
        { feature: data.feature2, featureDescription: data.featureDesc2 },
        { feature: data.feature3, featureDescription: data.featureDesc3 }
      ].filter(f => f.feature && f.featureDescription),
      productReviews: [
        {
          reviewbyCustomername: data.reviewer1,
          starRating: parseInt(data.rating1),
          reviewMessage: data.message1
        },
        {
          reviewbyCustomername: data.reviewer2,
          starRating: parseInt(data.rating2),
          reviewMessage: data.message2
        }
      ].filter(r => r.reviewbyCustomername && r.reviewMessage)
    };

    formData.append("product", JSON.stringify(product));
    if (data.image1[0]) formData.append("productImage", data.image1[0]);
    if (data.image2[0]) formData.append("productImage", data.image2[0]);

    axios.post("http://localhost:9292/product/postProduct", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(() => {
      alert("Product submitted successfully!");
      reset();
    })
    .catch(error => {
      console.error("Submission failed:", error);
      alert("Submission failed!");
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container w-50">
        <h2 className="mb-4 text-center">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <button type="submit" className="btn btn-primary w-100">Submit Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
