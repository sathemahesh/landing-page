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
                    background-color: #707070;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 4px;
                    text-decoration: none;
                    font-weight: bold;
                  }
                  .buy-ticket-btn:hover {
                    background-color: #5c5c5c;
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
                                <a className="nav-link active" aria-current="page" href="#">Services</a>
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
