import React from "react";
import Article from "../styling/Article.css";
import ecommerce from "../assets/ecommerce.jpg";
import insperation from "../assets/insperation.jpg";

function Articles() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col text-center">
          <h5
            className="s1 flex-center s2-wraper"
            style={{
              fontFamily: "sans-serif",
              color: "#F8669E",
              fontSize: "21px ",
            }}
          >
            Our News & Articles
          </h5>
          <h1
            className="s2 s2-wraper"
            style={{ fontFamily: "sans-serif", color: "#333369" }}
          >
            Our News & Articles
          </h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "100%" }}>
            <div style={{ position: "relative" }}>
              <img className="card-img-top" src={ecommerce} alt="E-commerce" />
              <button
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#F8669E",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                E-commerce
              </button>
            </div>
            <div className=" p-3" style={{ flex: "1 1 auto" }}>
              <p
                className="card-text ms-2 mb-1"
                style={{ fontSize: "21px", textAlign: "center" }}
              >
                How To Optimize Your Blog For High Ranking
              </p>
              <a
                href="#"
                className="card-link d-flex ms-2 "
                style={{ color: "#707070", textDecoration: "none" }}
              >
                Continue Reading
              </a>
            </div>
            {/* <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                Continue Reading
                            </a>
                        </div> */}
            <div
              className="card-footer border "
              style={{ backgroundColor: "white" }}
            >
              <a
                href="#"
                className="card-link d-flex ms-2"
                style={{
                  color: "#707070",
                  textDecoration: "none",
                  fontSize: "16px ",
                }}
              >
                August 25, 2022 | No Comments
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "100%" }}>
            <div style={{ position: "relative" }}>
              <img
                className="card-img-top"
                src={insperation}
                alt="Inspiration"
              />
              <button
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#F8669E",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Inspiration
              </button>
            </div>
            <div className=" p-3" style={{ flex: "1 1 auto" }}>
              <p
                className="card-text ms-2 mb-1"
                style={{ fontSize: "21px", textAlign: "center" }}
              >
                How To Optimize Your Blog For High Ranking
              </p>
              <a
                href="#"
                className="card-link d-flex ms-2 "
                style={{ color: "#707070", textDecoration: "none" }}
              >
                Continue Reading
              </a>
            </div>
            {/* <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                Continue Reading
                            </a>
                        </div> */}
            <div
              className="card-footer border "
              style={{ backgroundColor: "white" }}
            >
              <a
                href="#"
                className="card-link d-flex ms-2"
                style={{
                  color: "#707070",
                  textDecoration: "none",
                  fontSize: "16px ",
                }}
              >
                August 25, 2022 | No Comments
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "100%" }}>
            <div style={{ position: "relative" }}>
              <img className="card-img-top" src={insperation} alt="Public" />
              <button
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#F8669E",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Public
              </button>
            </div>
            <div className=" p-3" style={{ flex: "1 1 auto" }}>
              <p
                className="card-text ms-2 mb-1"
                style={{ fontSize: "21px", textAlign: "center" }}
              >
                How To Optimize Your Blog For High Ranking
              </p>
              <a
                href="#"
                className="card-link d-flex ms-2 "
                style={{ color: "#707070", textDecoration: "none" }}
              >
                Continue Reading
              </a>
            </div>
            {/* <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                Continue Reading
                            </a>
                        </div> */}
            <div
              className="card-footer border "
              style={{ backgroundColor: "white" }}
            >
              <a
                href="#"
                className="card-link d-flex ms-2"
                style={{
                  color: "#707070",
                  textDecoration: "none",
                  fontSize: "16px ",
                }}
              >
                August 25, 2022 | No Comments
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
