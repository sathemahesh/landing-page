import React from 'react';
import { BsCarFrontFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

import { BsFillPeopleFill } from "react-icons/bs";
import '../styling/Event.css';

const Event = () => {
  return (
    <div className="container text-center py-5 background_image">
      <div className="row">
        {/* Cards Section */}
        <div className="col-lg-4 d-flex justify-content-center align-items-center ">
          <div className="row flex-lg-column">
            <div className="col-lg-12 mb-3 mb-lg-3">
              <div className="card card__shadow">
                <div className="card-body">
                <BsFillPeopleFill  className="text-danger fs-1" />
                  <h5 className="card-title general">Event Conferences</h5>
                  
                  <p className="card-text general">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link " style={{color:"#707070", textDecoration:"none"}}> Learn More</a>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="card card__shadow">
                <div className="card-body">
                  <IoMdSettings className="text-danger fs-1" />
                  <h5 className="card-title general">Digital Marketing</h5>
                  
                  <p className="card-text general">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link" style={{color:"#707070", textDecoration:"none"}}> Learn More </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-flex justify-content-center align-items-center " style={{ marginTop: "10px" }}>
          <div className="card card__shadow">
            <div className="card-body">
              <FaFlag className="text-danger fs-1" />
              <h5 className="card-title general">Culture Leadership</h5>
            
              <p className="card-text general">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link" style={{color:"#707070", textDecoration:"none"}}> Learn More </a>
             
            </div>
          </div>
        </div>

        {/* Text and Button Section */}
        <div className="col-lg-4 py-5 style1">
          <h1 className="style2" style={{fontSize:"56px"}}>Events - Why You Should Join The </h1>
          <div className="" >
            <h1 className="" style={{color:"#707070", fontSize:"56px", textAlign:"left"}}>Events?</h1>
          </div>
          <p className="style2 general" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip suspendisse ultrices gravida. Risus commodo
          </p>
          <div className="button-container">
            <button className="nir-btn">Join event</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Event;