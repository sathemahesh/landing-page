import React from 'react';
import News_style from '../styling/News_style.css';
import back from '../assets/back.jpg';
import img7 from '../assets/img7.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import cardData from '../cardData.json';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';

function News() {

    const colStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
    };


    const items = [
        "All",
        "Online Ticketing",
        "Conference",
        "Marketing Events",
        "Optimization",
        "SEO Conference",
        "Leadership",
        "Digital Marketing"
    ];

    return (
        <div className="main_container">

            <div className="row">
                <div className="col" style={colStyle}>
                    <h5> Eventiz </h5>
                    <h1> Blog List </h1>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="  col-lg-8  ">
                        <div className="row first_card ">
                            {cardData.map((card) => (
                                <div className="col-12 col-md-6 mb-3" key={card.id}>
                                    <div className="card ">
                                        <img src={require(`../assets/${card.image}`)} className="card-img-top" alt={card.name} />

                                        <button
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                background: '#F8669E',
                                                color: '#fff',
                                                border: 'none',
                                                padding: '5px 10px',
                                                borderRadius: '5px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {card.buttonText}
                                        </button>

                                        <div className="card-body">
                                            <h4 className="card-title mt-0 heading_card">
                                                <Link to={`/blog_description/${card.id}`} className="text-decoration-none  heading_card">{card.title}</Link>
                                            </h4>
                                            <p className="card-text">{card.subtitle}</p>
                                        </div>
                                        <div className="card-footer text-start card-footer_style " >
                                            <small className="text-muted  date_style " >August 25, 2022 | No Comments</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col    col-lg-4   medium_style  first_card " >

                        <div className="row ">
                            <div className="col d-flex align-items-center">
                                <input
                                    className="form-control input_box"
                                    type="text"
                                    placeholder="Search here"
                                    style={{ width: '100%', marginRight: '-1px' }}
                                />
                                <button className="nir-btn btn btn-primary btn_style_search">Search</button>
                            </div>
                        </div>



                        <div className="col mt-5 ">
                            <div className="card  p-5 pb-1 " style={{ backgroundColor: "#F7F7F7", }}>
                                <img
                                    src={img7}
                                    className="card-img-top rounded-circle mx-auto d-block mt-3"
                                    alt="..."
                                    style={{ width: '80px', height: '80px' }}
                                />


                                <div className="card-body ">
                                    <h5 className="card-title theme1" style={{ fontSize: "21px" }}>Hi, Jenny Loral</h5>
                                    <p className="  theme" style={{ fontSize: "16px" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.
                                    </p>
                                    <p className="p-3">
                                        <FaFacebook className='fs-1  icons_style' /> <FaInstagramSquare className='fs-1 icons_style' />  <FaLinkedin className='fs-1 icons_style' /> <FaTwitter className='fs-1  icons_style' />
                                    </p>
                                </div>
                            </div>

                        </div>


                        {/* another column */}
                        <div className="col mt-5 border mb-5 p-5 " style={{ backgroundColor: "#F7F7F7" }}>

                            <h3 className=' border mt-4 theme1 bg-white  text-start ms-3 ' style={{ padding: "10px" }}> All Categories</h3>

                            <div className="col">
                                {items.map((item, index) => (
                                    <h4 key={index} className="ms-all">
                                        <TiTick className='fs-2 me-2' /> {item}
                                    </h4>
                                ))}
                            </div>


                        </div>

                        <div className="col  border mb-4  p-4 pt-3" style={{ backgroundColor: "#F7F7F7" }}>
                            <h3 className='border mt-4   theme1  bg-white  text-start  ' style={{ padding: "10px", fontSize: "21px" }}> Recent Posts</h3>
                            <div className="row  border-bottom mb-3 ">
                                <div className="col-4 mt-3 d-flex align-items-center">
                                    <img
                                        className='ms-2'
                                        src={blog1}
                                        alt="..."
                                        style={{ width: '95.25px', height: '50.25px' }}
                                    />

                                </div>
                                <div className="col-8 mb-3 mt-3">
                                    <h6 className='text-start  theme1'>An Incredibly Easy Method That Works For All</h6>
                                    <h6 className='text-start  theme1'>10 Apr 2023</h6>
                                </div>
                            </div>

                            <div className="row    border-bottom mb-3 ">
                                <div className="col-4  d-flex align-items-center">
                                    <img
                                        className='ms-2'
                                        src={blog2}
                                        alt="..."
                                        style={{ width: '95.25px', height: '50.25px' }}
                                    />

                                </div>
                                <div className="col-8 mb-3">
                                    <h6 className='text-start  theme1'> 15 Unheard Ways To Achieve Greater Walker</h6>
                                    <h6 className='text-start theme1'>29 Mar 2023</h6>
                                </div>
                            </div>


                            <div className="row    border-bottom mb-3 ">
                                <div className="col-4  d-flex align-items-center">
                                    <img
                                        className='ms-2'
                                        src={blog3}
                                        alt="..."
                                        style={{ width: '95.25px', height: '50.25px' }}
                                    />

                                </div>
                                <div className="col-8 mb-3">
                                    <h6 className='text-start  theme1'>An Incredibly Easy Method That Works For All</h6>
                                    <h6 className='text-start  theme1'> 10 Apr 2023</h6>
                                </div>
                            </div>

                            <div className="row   border-bottom mb-3 ">
                                <div className="col-4  d-flex align-items-center">
                                    <img
                                        className='ms-2'
                                        src={blog4}
                                        alt="..."
                                        style={{ width: '95.25px', height: '50.25px' }}
                                    />

                                </div>
                                <div className="col-8 mb-3">
                                    <h6 className='text-start   theme1'> 15 Unheard Ways To Achieve Greater Walker</h6>
                                    <h6 className='text-start  theme1'> 21 Feb 2023</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col border mb-5">

                            <div className="col border bg-light p-4 pt-3 ">
                                <h3 className='border mt-4   theme1  bg-white  text-start ms-1  ' style={{ padding: "16px", fontSize: "21px", marginBottom: "2rem" }}> Social Media</h3>
                                <div className="row">
                                    <div className="col-6 mb-2">
                                        <button className="w-100 social-media">Facebook</button>
                                    </div>
                                    <div className="col-6 mb-2">
                                        <button className="w-100 social-media">Twitter</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-2">
                                        <button className="w-100 social-media">Instagram</button>
                                    </div>
                                    <div className="col-6 mb-2">
                                        <button className="w-100  social-media">LinkedIn</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default News;
