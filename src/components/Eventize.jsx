import React from 'react'
import '../styling/Eventize.css'

import image_7 from '../assets/image_7.png'
import image_5 from '../assets/image_5.jpg'

function Eventize() {
    return (
        <div style={{ background: "#F7F7F7" }}>
            <div className="container mb-5">

                <div className="row text-center ms-3">
                    <div className="col-12 text-center mb-4">
                        <h5 className="test">Our Testimonials</h5>
                        <h1 className="test1">What People’s Says About</h1>
                        <h1 className="even">Eventiz</h1>
                    </div>
                </div>

                <div className="row align-items-center"> 
                    {/* Testimonial Section */}
                    <div className="col-12 col-md-6 d-flex align-items-start" > 
                        <div className="card p-4 mb-5">
                            <p className="text-start my-paragraph" style={{ color: "#707070" }}>
                                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores unde debitis, molestiae sed voluptatum cumque, doloremque cupiditate sit consectetur autem, saepe illum libero optio suscipit odit. Minima, praesentium quia!"
                            </p>

                            <div className="d-flex align-items-center">
                                <img src={image_5} alt="Mike Jorden" className='rounded-circle' style={{ height: "50px", width: "50px" }} />
                                <div className="d-flex flex-column ms-3">
                                    <h5 style={{ color: '#707070' }}>Mike Jorden</h5>
                                    <p style={{ color: "#707070" }}>Supervisor</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-12 col-md-6 d-flex align-items-start justify-content-center mb-5"> {/* Flexbox for alignment */}
                        <img src={image_7} alt="Eventiz" className="img-fluid" style={{ objectFit: "cover", height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventize;
