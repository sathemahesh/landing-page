import React from 'react';
import '../styling/Knowladge.css';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';  
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
function Knowladge() {
  return (
    <div className="container text-center">
      <div className="header mb-5">
        <p className="featured-speaker text-danger">Featured Speaker</p>
        <h1>
          Experience Speaker With <span className="knowledge text-danger">KNOWLEDGE</span>
        </h1>
      </div>
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-2 d-flex justify-content-center">
          <div className="image-card">
          <img src={img6} alt="Speaker" className="image-fluid" />
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="image-card">
              <img src={img11} alt="Speaker" className="image-fluid" />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="image-card">
              <img src={img7} alt="Speaker" className="image-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="image-card">
              <img src={img8} alt="Speaker" className="image-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-card">
              <img src={img9} alt="Speaker" className="image-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-2 d-flex justify-content-center">
          <div className="image-card">
          <img src={img7} alt="Speaker" className="image-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowladge;
