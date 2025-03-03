import React from 'react';
import man from "../assets/man4.png";
import Hero1 from '../styling/Hero1.css';

const Hero = () => {
    return (
        <div className='container' style={{ padding: "0 1rem", paddingTop: '4rem' }}>
            <div className="row d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                <div className="col-md-6 d-flex flex-column justify-content-center text-white" style={{ height: "100%", marginTop: '-20px' }}>
                    <h6 className="text-light text-left text-container">Event 2023</h6>
                    <h1 style={{ textAlign: "left", maxWidth: "700px", fontSize: '70px' }} className='fw-bold text-center text-md-start text-light'>
                        World Biggest 2023 Conference
                    </h1>
                    <p className='text-center text-md-start'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img style={{ maxHeight: "500px", overflow: "hidden" }} src={man} alt="Man" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
