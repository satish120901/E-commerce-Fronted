import React from 'react'

function About() {
  return (
       <div className="container-fluid bg-light py-5"> 
   <div className="container bg-white shadow p-0 rounded overflow-hidden"> 


   <div style={{backgroundColor:"pink", height:"100%", width:"100%"}} className="container py-5">
     <div className="text-center mb-5"> 
      <h1 className="display-4">About ElectroHub</h1>
      <p className="lead text-muted">Your trusted destination for the latest electronic devices</p>
       </div>

<div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img 
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" 
        alt="Mobile devices" 
        className="img-fluid rounded shadow" 
      />
    </div>
    <div className="col-md-6">
      <h3>Who We Are</h3>
      <p>
        ElectroHub is a leading online retailer specializing in the latest mobile phones, smart devices, and electronics.
        We bring the best technology to your fingertips with a focus on quality, affordability, and customer satisfaction.
      </p>
    </div>
  </div>

  <div className="row align-items-center">
    <div className="col-md-6 order-md-2">
      <img 
        src="https://media.istockphoto.com/id/514175379/photo/buying-smartphone.jpg?s=1024x1024&w=is&k=20&c=xMPHeIOnIvGoq69nab7MilyCXjpPEg5OAvBFRlEnfQ8=" 
        alt="Mobile support" 
        className="img-fluid rounded shadow" 
      />
    </div>
    <div className="col-md-6 order-md-1">
      <h3>Our Promise</h3>
      <p>
        At ElectroHub, we promise the fastest delivery, authentic products, and unmatched support.
        Whether you're looking for the latest smartphone or a smart home gadget, we ensure a smooth and secure shopping experience.
      </p>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default About