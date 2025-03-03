import React from "react";
import "../styling/Plan.css";
import price from "../assets/price.png";

function Plans() {
  return (
    <div className="container py-5" style={{ marginTop: "7rem" }}>
      <h2 className="text-center text-md-center text-lg-start">
        Explore Flexible Our Pricing
      </h2>

      <div
        className="text-center text-md-center text-lg-start mb-4"
        style={{ fontWeight: "bold" }}
      >
        <span style={{ fontSize: "56px", color: "#F8669E" }}>PLANS</span>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center flex-column flex-lg-row">
          {/* Basic Ticket */}
          <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div
              className="card text-center shadow border-0"
              style={{ borderRadius: "15px", width: "100%", maxWidth: "350px" }}
            >
              <div className="text-colour p-5">
                <h3 className="card-title ms_h3_style mb-0">Basic Ticket</h3>
                <p className="text-muted">Standard Package</p>
                <h3
                  className="fw-bold mb-3 text-colour"
                  style={{
                    fontSize: "56px",
                    fontFamily: "sans-serif",
                    color: "#F8669E",
                  }}
                >
                  $39.99
                </h3>
                <ul
                  className="list-unstyled mb-4 text-colour"
                  style={{ lineHeight: "2" }}
                >
                  <li className="pb-2 mb-2">Second Balcony Seat</li>
                  <li className="pb-2 mb-2">Snack & Softdrink</li>
                  <li className="pb-2 mb-2">Certificates</li>
                  <li className="pb-2 mb-2">Private Access</li>
                </ul>
                <button
                  className="nir-btn"
                  style={{ backgroundColor: "#F8669E", color: "white" }}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>

          {/* Silver Ticket */}
          <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div
              className="card text-center shadow border-0"
              style={{
                backgroundColor: "#333369",
                color: "white",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "350px",
              }}
            >
              <div className="text-light p-5">
                <h4 className="card-title text-light ms_h3_style">
                  Silver Ticket
                </h4>
                <p className="text-light">Pro Package</p>
                <h3
                  className="fw-bold mb-3 text-colour"
                  style={{
                    fontSize: "56px",
                    fontFamily: "sans-serif",
                    color: "#F8669E",
                  }}
                >
                  $59.99
                </h3>
                <ul
                  className="list-unstyled mb-4 text-light pb-2 mb-2"
                  style={{ lineHeight: "2" }}
                >
                  <li className="pb-2 mb-2">Second Balcony Seat</li>
                  <li className="pb-2 mb-2">Snack & Softdrink</li>
                  <li className="pb-2 mb-2">Certificates</li>
                  <li className="pb-2 mb-2">Printed Materials</li>
                  <li className="pb-2 mb-2">Private Access</li>
                </ul>
                <button
                  className="nir-btn"
                  style={{ backgroundColor: "#F8669E", color: "white" }}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>

          {/* Gold Ticket */}
          <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div
              className="card text-center shadow border-0"
              style={{ borderRadius: "15px", width: "100%", maxWidth: "350px" }}
            >
              <div className="p-5">
                <h4 className="card-title text-colour">Gold Ticket</h4>
                <p className="text-muted">Enterprise Package</p>
                <h3
                  className="fw-bold mb-3 text-colour"
                  style={{
                    fontSize: "56px",
                    fontFamily: "sans-serif",
                    color: "#F8669E",
                  }}
                >
                  $199.99
                </h3>
                <ul
                  className="list-unstyled mb-4 text-colour"
                  style={{ lineHeight: "2" }}
                >
                  <li className="pb-2 mb-2">Second Balcony Seat</li>
                  <li className="pb-2 mb-2">Snack & Softdrink</li>
                  <li className="pb-2 mb-2">Certificates</li>
                  <li className="pb-2 mb-2">Private Access</li>
                </ul>
                <button
                  className="nir-btn"
                  style={{ backgroundColor: "#F8669E", color: "white" }}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
