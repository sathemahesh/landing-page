import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <style>
                {`
                  .background_colour {
                    bottom: 0;
                    background: linear-gradient(to right, #3A3089, #C83F74);
                  }
                  .navbar-brand img {
                    height: 40px; /* Adjust the height of the logo */
                  }
                  .navbar-nav.ml-auto {
                    margin-left: auto;
                  }
                  .buy-ticket-btn {
                       position: relative;
    z-index: 1;
    font-size: 16px;
    text-align: center;
    padding: 15px 25px;
    text-transform: capitalize;
    transition: allease-in-out 0.5s;
    background: #F8669E;
    color: #fff;
    display: inline-block;
    border-radius: 0px;
    border: none;
    box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.1);
    overflow: hidden;
                  }
                  .buy-ticket-btn:hover {
                    background-color:rgb(114, 126, 161);
                  }
                `}
            </style>

            <nav className="navbar navbar-expand-lg background_colour">
                <div className="container" >
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/news">
                                    News
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">
                                    products
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="buy-ticket-btn" href="#">Buy Ticket</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
