import React from 'react'

function Contact() {
  return (

   <div className="container-fluid bg-light py-5"> 
   <div className="container bg-white shadow p-0 rounded overflow-hidden"> 
    <div className="row g-0"> {/* Left Green Section */} 
    <div className="col-md-5 bg-success text-white p-4"> 
    <h2 className="mb-3">Let's get in touch</h2> 
    <p className="mb-4">We're open for any suggestion or just to have a chat</p>

<div className="mb-3">
          <strong>Address:</strong>
          <p>2nd floor West 12th Street, Pune, karvenagar</p>
        </div>

        <div className="mb-3">
          <strong>Phone:</strong>
          <p>+ 1234 5468 99</p>
        </div>

        <div className="mb-3">
          <strong>Email:</strong>
          <p>info@ecommerce.com</p>
        </div>

        <div>
          <strong>Website:</strong>
          <p>www.ecommerce.com</p>
        </div>
      </div>

      {/* Right Contact Form Section */}
      <div className="col-md-7 p-4">
        <h2 className="mb-4">Get in touch</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">FULL NAME</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">EMAIL ADDRESS</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">SUBJECT</label>
            <input type="text" className="form-control" placeholder="Subject" />
          </div>

          <div className="mb-3">
            <label className="form-label">MESSAGE</label>
            <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          </div>

          <button type="submit" className="btn btn-success">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact