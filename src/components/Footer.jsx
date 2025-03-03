import React from "react";
import logo1 from "../assets/logo1.png";

import Footerstyle from "../styling/Footerstyle.css";

import { MdOutlinePhone } from "react-icons/md";

import { CiMail } from "react-icons/ci";
function Footer() {
    return (
        <footer
            className=" text-light py-2 "
            style={{ backgroundColor: " #333369" }}
        >
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 mb-4 text-style">
                        <img src={logo1} alt="" />
                        <p className="text-style ms-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                            suspendisse leo neque iaculis molestie sagittis.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-light">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="text-uppercase text-style">Quick Links</h5>
                        <ul className="list-unstyled text-style">
                            <li className="mb-2">
                                <a href="#" className="text-light text-style ">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-style">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-style">
                                    Speakers
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-style">
                                    Schedule
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-style">
                                    Ticket Pricing
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-style">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-lg-3 col-md-6 mb-4 text-style">
                        <h5 className="text-uppercase text-style">Get In Touch</h5>
                        <p className="text-style">1616 Broadway NY, New York, USA</p>
                        <p className=" d-flex align-items-center">
                            <i className="fas fa-phone fs-1 me-2">

                                <MdOutlinePhone />
                            </i>{" "}
                            955 444 1245
                        </p>
                        <div className="row">
                            <div className="col d-flex align-items-center">
                                <i className="fas fa-envelope fs-1  me-2">
                                    <CiMail />
                                </i>
                                <div className="text-start" style={{ fontSize: "16px" }}>
                                    Info@Eventiz.Com
                                    <span className="d-block"> For information</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-lg-3 col-md-6 mb-4 text-style">
                        <h5 className="text-uppercase">Subscribe To Our Newsletter</h5>
                        <p>New subscribers get 10% off your next order</p>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                />
                            </div>
                            <div>
                                <button
                                    className="btn text-white w-100 nir-btn"
                                    type="submit"
                                    style={{ backgroundColor: "#F8669E" }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="text-center " style={{ backgroundColor: "#37377b" }}>
                    <p className="mb-0 py-3">
                        &copy; 2023 Eventiz. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
