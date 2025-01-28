import React from 'react';
import '../styling/Plan.css';
import price from '../assets/price.png'
function Plans() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 " style={{ textAlign:"left", fontSize:"56px",  }}>
        Explore Flexible Our Pricing
      </h2>
      <div className="mb-4 text-start1 text-start2" style={{ fontWeight: "bold", fontSize: "2rem" }}>
        <span style={{ color: "#707070" ,fontSize:"56px" }}>PLANS</span>
      </div>
       
      <div className="row d-flex justify-content-center">
        {/* Basic Ticket */}
        <div className="col-md-4 col-sm-8 col-10 mb-3">
          <div className="card text-center shadow border-0" style={{ borderRadius: "15px", width: "100%", height: "100%" }}>
            <div className="card-body text-colour ">
              <h4 className="card-title ">Basic Ticket</h4>
              <p className="text-muted">Standard Package</p>
              <h3 className=" fw-bold mb-3 text-colour">$39.99</h3>
              <ul className="list-unstyled mb-4 text-colour" style={{ lineHeight: "2" }}>
                <li>Second Balcony Seat</li>
                <li>Snack & Softdrink</li>
                <li>Certificates</li>
                <li>Private Access</li>
              </ul>
              <button className="btn btn-pink btn-lg" style={{ backgroundColor: "#707070", color: "white" }}>
                Purchase
              </button>
              <p className="mt-2 text-muted text-colour" style={{ fontSize: "0.85rem" }}>
                *Please read our terms and conditions before ordering tickets
              </p>
            </div>
          </div>
        </div>

        {/* Silver Ticket */}
        <div className="col-md-4 col-sm-8 col-10 mb-3">
          <div
            className="card text-center shadow border-0"
            style={{ backgroundColor: "#333369", color: "white", borderRadius: "15px", width: "100%", height: "100%" }}
          >
            <div className="card-body text-light">
              <h4 className="card-title text-light">Silver Ticket</h4>
              <p className="text-light">Pro Package</p>
              <h3 className="fw-bold mb-3 text-colour" style={{ color: "#707070" }}>$59.99</h3>
              <ul className="list-unstyled mb-4 text-light" style={{ lineHeight: "2" }}>
                <li>Second Balcony Seat</li>
                <li>Snack & Softdrink</li>
                <li>Certificates</li>
                <li>Printed Materials</li>
                <li>Private Access</li>
              </ul>
              <button className="btn btn-pink btn-lg" style={{ backgroundColor: "#ff007c", color: "white" }}>
                Purchase
              </button>
              <p className="mt-2 text-light text-colour" style={{ fontSize: "0.85rem" }}>
                *Please read our terms and conditions before ordering tickets
              </p>
            </div>
          </div>
        </div>

        {/* Gold Ticket */}
        <div className="col-md-4 col-sm-8 col-10 mb-3 ">
          <div className="card text-center shadow border-0" style={{ borderRadius: "15px", width: "100%", height: "100%" }}>
            <div className="card-body">
              <h4 className="card-title text-colour">Gold Ticket</h4>
              <p className="text-muted">Enterprise Package</p>
              <h3 className="text-colour fw-bold mb-3">$199.99</h3>
              <ul className="list-unstyled mb-4 text-colour" style={{ lineHeight: "2" }}>
                <li>Second Balcony Seat</li>
                <li>Snack & Softdrink</li>
                <li>Certificates</li>
                <li>Private Access</li>
              </ul>
              <button className="btn btn-pink btn-lg" style={{ backgroundColor: "#ff007c", color: "white" }}>
                Purchase
              </button>
              <p className="mt-2 text-muted" style={{ fontSize: "0.85rem" }}>
                *Please read our terms and conditions before ordering tickets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
