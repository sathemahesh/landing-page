import React from "react";
import image_2 from "../assets/image_2.jpg";
import image_3 from "../assets/image_3.jpg";
import image_4 from "../assets/image_4.jpg";
import "../styling/Middle.css";
function Middle() {
  return (
    <div className="container text-center mt-5">
      <div className="row d-flex align-items-center justify-content-between">
        {/* Left Section */}
        <div className="col-lg-5 col-md-6 col-sm-12 pe-lg-4 mb-4">
          <div>
            {" "}
            <h4
              className="h4_font para"
                          style={{ color: "#F8669E", fontSize: "21px", lineHeight: "1" }}
            >
              Conference Organisation
            </h4>
          </div>
          <div>
            <h1
              className="h4_font para"
              style={{ color: "#333369", fontSize: "56px" , lineHeight:"1"}}
            >
              Conference, Seminars &
            </h1>
          </div>
          <div className="">
            {" "}
            <h1
              className="text-left para"
                          style={{ textAlign: "left", color: "#F8669E", fontSize: "56px", lineHeight: "1" }}
            >
              {" "}
              Events
            </h1>
          </div>
          <p
            className="mb-4 text-start mt-3"
            style={{ color: "#707070", fontSize: "16px" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            necessitatibus mollitia sunt deleniti ut, qui debitis quaerat aut
            officia dolore, fuga maiores magnam, corporis quisquam. Vel,
            reiciendis magnam? Possimus, asperiores.
          </p>
          <div className="button-container">
            <button className="nir-btn" style={{ backgroundColor:"#F8669E"}}>Join event</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="row align-items-center">
            {/* First Image */}
            <div className="col-lg-6 col-md-12 mb-4">
              <img
                src={image_4}
                alt="image_not_found"
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Second and Third Images */}
            <div className="col-lg-6 col-md-12">
              <img
                className="mb-4 img-fluid"
                src={image_2}
                alt="image_not_found"
                style={{ width: "100%", maxWidth: "347.5px", height: "auto" }}
              />
              <img
                src={image_3}
                alt="image_not_found"
                className="img-fluid"
                style={{ width: "100%", maxWidth: "347.5px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
