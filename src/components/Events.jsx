import React from 'react';

import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';

import '../styling/Event1.css';
function Events() {
  return (
    <div className="container mb-5 ">
      <div className="row text-center mb-4">
        <div className="col-12">
          <h6 className="h6-style style1" style={{ fontFamily:"sans-serif", fontSize:"21px"}}>Event Gallery</h6>
          <h1 className="h1-style "style={{ fontFamily:"sans-serif", fontSize:"56PX"}}>Beautiful Snapshot Of Recent</h1>
          <h1 className="h1-colour"style={{ fontFamily:"inter, sans-serif", color:"#F8669E", fontSize:"56PX"}}>Events</h1>
        </div>
      </div>

      <div className="row g-3 justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={blog1} alt="Event 1" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={blog2} alt="Event 2" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={blog3} alt="Event 3" className="img-fluid rounded" />
        </div>
      </div>

      <div className="row g-3  justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={blog4} alt="Event 4" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={blog5} alt="Event 5" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={blog6} alt="Event 6" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Events;
