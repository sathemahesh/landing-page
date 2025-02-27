import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

import Navbarstyle from '../styling/Navbarstyle.css';
const Header = () => {
    return (
        <div>
         
            <nav className="navbar navbar-expand-lg background_colour">
                <div className="container" >
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-link-active1">
                            <li className="nav-item">
                                <a className=" nav-link active   ms-nav-style" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className=" nav-link active" aria-current="page" href="/Contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " to="/news">
                                    News
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link active" to="/product">
                                    products
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="buy-ticket-btn" href="#" style ={{ textDecoration:"none"}}>Buy Ticket</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
