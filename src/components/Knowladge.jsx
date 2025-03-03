import React from "react";
import "../styling/Knowladge.css";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";

const images = [
  { src: img6, style: { width: "327px", height: "409px", objectFit: "cover" } },
  { src: img7, style: { maxWidth: "100%", height: "auto" } },
  { src: img8, style: { maxWidth: "100%", height: "auto" } },
  { src: img9, style: { maxWidth: "100%", height: "auto" } },
  { src: img10, style: { maxWidth: "100%", height: "auto" } },
  { src: img11, style: { width: "327px", height: "409px", objectFit: "cover" } }
];

function Knowladge() {
  return (
    <div className="container " style ={{marginTop:"7rem"}}>
      
      <div className="row card-style1 text-center">
        <div className="col">
          <h5 className="heading card-style1" >Featured Speaker</h5>
          <h1 className="card-style1" style={{  color: "#333369" }}>Experience Speaker With</h1>
          <h1 className="heading3 card-style1" >Knowledge</h1>
        </div>
      </div>

      {/* Image Grid */}
      <div className="row mt-5">
        {/* Left Image */}
        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3">
          <img
            src={images[0].src}
            alt="Speaker"
            className="img-fluid"
            style={images[0].style}
          />
        </div>

        {/* Center Images */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mb-3">
          <div className="row w-100">
            {images.slice(1, 5).map((image, index) => (
              <div key={index} className="col-12 col-sm-6 mb-3 d-flex justify-content-center">
                <img
                  src={image.src}
                  alt="Speaker"
                  className="img-fluid"
                  style={image.style}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column mb-3">
          <img
            src={images[5].src}
            alt="Speaker"
            className="img-fluid"
            style={images[5].style}
          />
        </div>
      </div>

      {/* Centered Button */}
      <div className="text-center mt-4">
        <button className="btn_style mx-auto d-block">View All Speakers</button>
      </div>
    </div>
  );
}

export default Knowladge;
