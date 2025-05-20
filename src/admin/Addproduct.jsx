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
      {/* Product details */}
          <input {...register("productName")} placeholder="Product Name" className="form-control mb-2" />
          <input {...register("description")} placeholder="Description" className="form-control mb-2" />
          <input {...register("brand")} placeholder="Brand" className="form-control mb-2" />
          <input {...register("category")} placeholder="Category" className="form-control mb-2" />
          <input type="number" step="0.01" {...register("price")} placeholder="Price" className="form-control mb-2" />
          <input type="number" {...register("quantityAvailable")} placeholder="Quantity Available" className="form-control mb-2" />
          <input {...register("supplierName")} placeholder="Supplier Name" className="form-control mb-2" />
          <input {...register("supplierContact")} placeholder="Supplier Contact" className="form-control mb-2" />
          <input type="number" {...register("warrantyPeriod")} placeholder="Warranty Period (months)" className="form-control mb-2" />
          <div className="form-check mb-3">
            <input type="checkbox" {...register("available")} className="form-check-input" id="availableCheck" />
            <label className="form-check-label" htmlFor="availableCheck">Available</label>
          </div>

          {/* Product Features */}
          <h5>Product Features</h5>
          <input {...register("feature1")} placeholder="Feature 1 (e.g., RAM)" className="form-control mb-2" />
          <input {...register("featureDesc1")} placeholder="Feature 1 Description" className="form-control mb-2" />
          <input {...register("feature2")} placeholder="Feature 2" className="form-control mb-2" />
          <input {...register("featureDesc2")} placeholder="Feature 2 Description" className="form-control mb-2" />
          <input {...register("feature3")} placeholder="Feature 3" className="form-control mb-2" />
          <input {...register("featureDesc3")} placeholder="Feature 3 Description" className="form-control mb-2" />

          {/* Product Reviews */}
          <h5>Customer Reviews</h5>
          <input {...register("reviewer1")} placeholder="Reviewer 1 Name" className="form-control mb-2" />
          <input type="number" {...register("rating1")} placeholder="Rating 1 (1–5)" className="form-control mb-2" />
          <input {...register("message1")} placeholder="Review Message 1" className="form-control mb-2" />

          <input {...register("reviewer2")} placeholder="Reviewer 2 Name" className="form-control mb-2" />
          <input type="number" {...register("rating2")} placeholder="Rating 2 (1–5)" className="form-control mb-2" />
          <input {...register("message2")} placeholder="Review Message 2" className="form-control mb-2" />

          {/* Image Upload */}
          <h5>Product Images</h5>
          <input type="file" {...register("image1")} className="form-control mb-2" />
          <input type="file" {...register("image2")} className="form-control mb-3" />
          
          <button type="submit" className="btn btn-primary w-100">Submit Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
