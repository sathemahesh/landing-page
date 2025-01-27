import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";


import Locations from '../styling/Locations.css'

function Location() {
    return (
        <>
            <div style={{ background: "#F7F7F7" }}>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <h4 className="text-start"> Reach Us</h4>
                            <div>
                                <h1 className="text-start"> Get Direction To The Event</h1>
                            </div>
                            <div className="text-start">
                                <h1 >LOCATION</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 border w-50">
                        <div className="col border hp d-flex justify-content-center align-items-center">
                            <IoLocationSharp className="fs-1 text-white" />
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam quis, tempore esse sit, officiis non, dolorem reprehenderit omnis maxime totam veniam tempora pariatur quasi. Modi tenetur quam quod saepe!
                        </div>
                    </div>

                    <div className="row mb-3 w-50 ">
                        <div className="col border hp d-flex justify-content-center align-items-center">
                            <FaMapPin className="fs-1 text-white" />
                        </div>
                        <div className="col border">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur ad ducimus eos. Sunt iste quas corrupti, facere facilis nostrum doloribus cupiditate exercitationem deleniti asperiores natus tenetur doloremque, fuga labore?
                        </div>


                    </div>

                    <div className="d-flex justify-content-end align-items-start" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.125007415406!2d73.9291984759568!3d18.523252269090783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c142181cd9ab%3A0x6377dec539b127f0!2sMetapercept%20Technology%20Services%20LLP!5e0!3m2!1sen!2sin!4v1737982821568!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>
            {/* ******************** */}
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <h4 className="text-start"> Reach Us</h4>
                            <div>
                                <h1 className="text-start"> Get Direction To The Event</h1>
                            </div>
                            <div className="text-start">
                                <h1 >LOCATION</h1>
                            </div>
                            <div className="row mb-3 border w-50">
                        <div className="col border hp d-flex justify-content-center align-items-center">
                            <IoLocationSharp className="fs-1 text-white" />
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam quis, tempore esse sit, officiis non, dolorem reprehenderit omnis maxime totam veniam tempora pariatur quasi. Modi tenetur quam quod saepe!
                        </div>
                        
                    </div>
                    <div className="row ">
                        <div className="col border hp d-flex justify-content-center align-items-center">
                            <FaMapPin className="fs-1 text-white" />
                        </div>
                        <div className="col border">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur ad ducimus eos. Sunt iste quas corrupti, facere facilis nostrum doloribus cupiditate exercitationem deleniti asperiores natus tenetur doloremque, fuga labore?
                        </div>


                    </div>
                    </div>
                    <div class="col-sm d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-end align-items-start" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.125007415406!2d73.9291984759568!3d18.523252269090783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c142181cd9ab%3A0x6377dec539b127f0!2sMetapercept%20Technology%20Services%20LLP!5e0!3m2!1sen!2sin!4v1737982821568!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Location
