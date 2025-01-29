import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import '../styling/Locations.css';
import india from '../assets/india.jpg'
function Location() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                    <h4 className="text-center text-lg-start" style={{ color: "#707070", fontSize: "21px" }}>Reach Us</h4>
                    <h1 className="text-center text-lg-start heading-style" style={{ color: "#333369" }}>Get Direction To The Event</h1>
                    <h1 className="text-center text-lg-start mb-5 heading-style" style={{ color: "#707070" }}>LOCATION</h1>

                    <div className="row border  d-flex align-items-stretch  align-self-center flex-st text-center text-md-start flex-column flex-md-row mb-3">
                        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center  bg-danger h-full log-style">
                            <IoLocationSharp className="fs-1" />
                            
                        </div>

                        <div className="col-12 col-md-10 py-2">
                            <h5 className='pt-2'>Galleria Mall Conference Center</h5>
                            <p>19 By Pass NR, Bali, Indonesia, BC 22196</p>
                        </div>
                    </div>

                    <div className="row border  d-flex align-items-stretch  align-self-center flex-st text-center text-md-start flex-column flex-md-row mb-3">
                        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center  bg-danger h-full log-style">
                        <FaMapPin className="fs-1 " />

                        </div>
                        <div className="col-12 col-md-10 py-2">
                            <h5>Reception Info</h5>
                            <p>Phone Number: (+62) 1919-2022, (+62) 1919-2023</p>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-5">
                    <img src={india} alt=" " style={{ hight: "700%", width: "290px" }} />
                </div>
            </div>
        </div>
    );
}

export default Location;
