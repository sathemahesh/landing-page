import React from 'react'
import man from "../assets/man4.png"
import Hero1 from '../styling/Hero1.css'
const Hero = () => {
    return (
        <div
            className='container'
            style={{
                padding: "0 1rem",
                paddingTop: '7rem',

            }}>
            <div className="grid d-flex justify-content-center align-items-center flex-column flex-md-row" style={{
                height: "100%"

            }}>
                <div className="g-col-6 text-white " style={{
                    height: "100%",
                    width: "100%"
                }}> 
                    <h6 className="text-light text-left text-container  "> Event 2023</h6> 
                    <h1 style={{ textAlign: "left", maxWidth: "700px", fontSize: '70PX', }} className='fw-bold text-center text-md-start text-light'>World Biggest 2023 Conference</h1>
                    <p className='text-center text-md-start'>Duis aute irure dolor in reprehenderit in vol,uptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="g-col-6">
                    <img style={{
                        maxHeight: "500px",
                        overflow: "hidden"
                    }} src={man} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero