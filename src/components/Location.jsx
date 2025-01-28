import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";


import Locations from '../styling/Locations.css'

function Location() {
    return (
        <div>

           
            <div class="container mb-5">
                <div class="row">
                    <div class="col-sm-6">
                        <h4 className="text-start" style={{color:"#707070", fontSize:"21px"}}> Reach Us</h4>
                        <div>
                            <h1 className="text-start" style={{color:"#333369",fontSize:"56px"}}> Get Direction To The Event</h1>
                        </div>
                        <div className="text-start"  >
                            <h1  className="mb-5"style={{color:"#707070",fontSize:"56px"}}>LOCATION</h1>
                        </div>
                        <div className="row border  mb-5">
                            <div className="col border hp d-flex justify-content-center align-items-center">
                                <IoLocationSharp className="fs-1 text-white" />
                            </div>
                            <div className="col">
                              <h5 className="text-left" style={{color:"#333369"}}>
                              Galleria Mall Conference Center
                              </h5>
                             <p className="text-left">19 By Pass NR, Bali, Indonesia, BC 22196</p>
                            </div>

                        </div>
                        <div className="row ">
                            <div className="col border hp d-flex justify-content-center align-items-center">
                                <FaMapPin className="fs-1 text-white" />
                            </div>
                            <div className="col border">
                           <h5 className="text-left  " style={{color:"#333369"}}>Reception Info</h5>
                          <p className="text-left ">  Phone Number: (+62) 1919-2022, (+62) 1919-2023 </p>
                            </div>


                        </div>
                    </div>
                    <div class="col-sm d-flex justify-content-center align-items-center "  style={{marginTop:"100px"}}>
                        <div className="d-flex justify-content-end align-items-start" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.125007415406!2d73.9291984759568!3d18.523252269090783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c142181cd9ab%3A0x6377dec539b127f0!2sMetapercept%20Technology%20Services%20LLP!5e0!3m2!1sen!2sin!4v1737982821568!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
            </div>
    )
}

export default Location
