import React from 'react';
import { BsCarFrontFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

import { BsFillPeopleFill } from "react-icons/bs";
import '../styling/Event.css';

const Event = () => {
  return (
    <div className="container text-center py-5 background_image " style={{ marginTop: "7rem" }}>
      <div className="row">
        {/* Cards Section */}
        <div className="col-lg-4 d-flex justify-content-center align-items-center ">
          <div className="row flex-lg-column">
            <div className="col-lg-12 mb-3 mb-lg-3">
              <div className="card card__shadow">
                <div className="card-body p-5  mb-4">
                  <BsFillPeopleFill className="text-danger " style={{
                    color: "#707070",
                    fontFamily: "Poppins, sans-serif",
                    padding: "0px 0px 16px",
                    fontSize:"75px", 
                  
                  }} />
                  <h5 className="card-title " style={{ fontSize: "21px", fontFamily: "Poppins, sans-serif", color: "#333369", margin: "0px 0px 16px" }}>Event Conferences</h5>
                  
                  <p className=" general">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link " style={{color:"#F8669E", textDecoration:"none"}}> Learn More</a>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="card card__shadow">
                <div className="card-body p-5 mb-4">
                  <IoMdSettings className="text-danger " style={{
                    color: "#707070",
                    fontFamily: "Poppins, sans-serif",
                    padding: "0px 0px 16px",
                    fontSize: " 70px"
                  }} />
                  <h5 className="card-title " style={{ fontSize: "21px", fontFamily: "Poppins, sans-serif", color: "#333369", margin: "0px 0px 16px" }}>Digital Marketing</h5>
                  
                  <p className=" general">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link" style={{color:"#F8669E", textDecoration:"none"}}> Learn More </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-flex justify-content-center align-items-center " style={{ marginTop: "10px" }}>
          <div className="card card__shadow">
            <div className="card-body p-5 mb-4">
              <FaFlag className="text-danger " style={{
                color: "#707070",
                fontFamily: "Poppins, sans-serif",
                padding: "0px 0px 16px",
                fontSize: "70px"
              }} />
              <h5 className=" " style={{ fontSize: "21px", fontFamily: "Poppins, sans-serif", color: "#333369", margin: "0px 0px 16px" }}>Culture Leadership</h5>
            
              <p className=" general">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link" style={{color:"#F8669E", textDecoration:"none"}}> Learn More </a>
             
            </div>
          </div>
        </div>

        {/* Text and Button Section */}
        <div className="col-lg-4 py-5 style1">
          <div className="row">
            <div className="col">
              <div className="selector4" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="row">
                  <div className="col mt-5">
                    <h2 className="ah-headline" style={{ marginBottom: "5px" ,lineHeight:"1.22em"}}>
                      <span>Why You Should </span>
                    </h2>
                    <div className="col d-flex justify-content-center justify-content-md-start">
                      <b
                        className="is-visible textcap text-start"
                        style={{ fontSize: "56px", marginTop: "0px", lineHeight: "1.22em" }}
                      >
                        join the Events?
                      </b>
                    </div>


                    <div className="col mt-3">
                      <p className="text-center text-md-start mb-4" style={{ fontSize: "16px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores odit, porro laudantium mollitia quae eaque saepe! Mollitia odio sint officia quaerat ad perferendis saepe velit, earum at optio porro!
                      </p>
                    </div>

                    <div className="d-flex justify-content-center justify-content-md-start">
                      <button className="nir-btn" style={{ background: "#F8668E" }}>Join Event</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Event;