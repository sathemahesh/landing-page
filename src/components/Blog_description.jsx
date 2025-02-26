import React from 'react'

import '../styling/Blog.css';

import { useParams } from "react-router-dom";
import back from '../assets/back.jpg';

import image1_author from '../assets/image1_author.jpg';

import { MdOutlineStar } from "react-icons/md";


import img7 from '../assets/img7.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'

import cards from '../cardData.json';
import { TiTick } from "react-icons/ti";
const Blog_description = () => {

    const { id } = useParams();
    const cardData = cards.find((post) => post.id === parseInt(id));

    if (!cardData) {
        return <h2>Blog post not found</h2>;
    }

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
                    <h6 className=''> Eventiz</h6>
                    <h1 className=''> Single Blog  </h1>
                </div>
            </div>


            <div className="container ">
                <div className="row mt-5">
                    <div className="col">
                        <div className="">
                            <div className="blog-single">
                                <img
                                    src={require(`../assets/${cardData.image}`)}
                                    alt={cardData.name}
                                    className="w-100 d-block"

                                />


                                <p
                                    className="mb-3 text-lg-start text-center"
                                    style={{ fontSize: "16px", fontFamily: "Poppins,sans-serif" }}
                                >
                                    {cardData.paragraph}
                                </p>

                                <div className="blog-wrapper_style">

                                    <div className="blog-author  bg-light border-all p-4 pb-2">
                                        <div className="blog-author-item">
                                            <div className="row d-flex justify-content-between align-items-center text-center text-lg-start">
                                                <div className="col-lg-2 mb-2">
                                                    <div className="blog-thumb">
                                                        <img src={image1_author} alt="Author" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 mb-2">
                                                    <h5 className="mb-1" style={{ color: "#333369" }}>Team World</h5>
                                                    <p className="ms-2" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-4  mb-0">

                            <div className="mb-4 text-center text-lg-start">
                                <h2 className="text-center text-lg-start">Leave A Reply</h2>
                                <p className="text-center text-lg-start" style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif" }}>
                                    Your email address will not be published. Required fields are marked *
                                </p>

                                <form>
                                    <div className="form-group mb-2">
                                        <label>Comment*</label>
                                    </div>
                                    <div className="form-group mb-2">
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label>Name*</label>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input className="input_style" type="text" placeholder="" />
                                    </div>

                                    <div className="form-group mb-2">
                                        <label>Email*</label>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input className="input_style" type="email" placeholder="" />
                                    </div>

                                    <div className="form-group mb-2">
                                        <label>Website*</label>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input className="input_style" type="text" placeholder="" />
                                    </div>

                                    <div className="col">
                                        <p className="mb-0">
                                            <input name="" type="checkbox" value="yes" />
                                        </p>
                                        <div style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif" }}>
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>

                                        <div className="form-btn mb-2">
                                            <button type="submit" className="nir-btn mt-2">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>




                        <div className="row ">
                            <div className="col ">
                                <h4 className="mb-4 text-center text-lg-start" style={{ color: "#333369" }}>Showing 16 verified guest comments</h4>
                                <div className="comment-image mt-2 d-flex mb-3  ">
                                    <img src={image1_author} alt="image" style={{ height: "37.55px ", width: "41.72" }} />
                                    <div className="comment-content  border  text-start ms-4" style={{ background: " #F7F7F7" }}>
                                        <div className="row">
                                            <div className="col ms-4">
                                                <h4 className="mb-1 mt-3" style={{ color: "#333369" }}>Soldman Kell</h4>
                                            </div>
                                            <div className="col mt-3  text-end">
                                                <p className="comment-date me-4" style={{ fontSize: "14px" }}>April 25, 2023 at 10:46 am</p>
                                            </div>
                                        </div>

                                        <div className="comment-rate ms-3">
                                            <div className="rating">
                                                <span className="fa fa-star checked ms-2" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                            </div>

                                            <span className="comment-title ms-3" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>"The worst hotel ever"</span>
                                        </div>

                                        <p className="comment ms-3" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                        <div className="comment-like">
                                            <div className="like-title float-md-start float-none">
                                                <button className=" nir-btn    ms-3  mb-3"> Reply</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="row ">
                            <div className="col ">

                                <div className="comment-image mt-2 d-flex mb-3  ">
                                    <img src={image1_author} alt="image" style={{ height: "37.55px ", width: "41.72" }} />
                                    <div className="comment-content  border  text-start ms-4" style={{ background: " #F7F7F7" }}>
                                        <div className="row">
                                            <div className="col ms-4">
                                                <h4 className="mb-1 mt-3" style={{ color: "#333369" }}>Burson Lesson</h4>
                                            </div>
                                            <div className="col mt-3  text-end">
                                                <p className="comment-date me-4" style={{ fontSize: "14px" }}>April 25, 2023 at 10:46 am</p>
                                            </div>
                                        </div>

                                        <div className="comment-rate ms-3">
                                            <div className="rating">
                                                <span className="fa fa-star checked ms-2" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                                <span className="fa fa-star checked" style={{ color: "yellow" }}>
                                                    <MdOutlineStar />
                                                </span>
                                            </div>

                                            <span className="comment-title ms-3" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>"The worst hotel ever"</span>
                                        </div>

                                        <p className="comment ms-3" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                        <div className="comment-like">
                                            <div className="like-title   ">

                                                <button className=" nir-btn    ms-3  mb-3"> Reply</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-8">
                            <div className="blog-next row mb-4 d-flex align-items-center justify-content-between">
                                <a href="#" className="d-block border-end col-6 text-decoration-none">
                                    <div className="prev ps-4">
                                        <i className="fa fa-arrow-left"></i>
                                        <p className="m-0 text-start ms-3" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>Previous</p>
                                        <p className="m-0 theme1 fw-bold text-truncate" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>Learning to Take Your Life Into Your Own Hands</p>
                                    </div>
                                </a>
                                <a href="#" className="d-block col-6 text-decoration-none">
                                    <div className="next pr-4 text-right">
                                        <i className="fa fa-arrow-right"></i>
                                        <p className="m-0 text-start" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>Previous</p>
                                        <p className="m-0 theme1 fw-bold text-truncate text-start" style={{ fontSize: "16px", fontFamily: " Poppins,sans-serif" }}>The bedding was hardly able</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-4   right_col ">


                        <div className="row ">
                            <div className="col d-flex align-items-center">
                                <input
                                    className="form-control input_box"
                                    type="text"
                                    placeholder="Search here"
                                    style={{ width: '100%', marginRight: '-1px' }}
                                />
                                <div className=''><button className="nir-btn btn btn-primary btn_style_search">Search</button></div>
                                {/* <button className="nir-btn btn btn-primary btn_style_search">Search</button> */}
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

                        {/*  All categories  */}

                        <div className="col mt-5 border mb-5 p-4 " style={{ backgroundColor: "#F7F7F7" }}>

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
    )
}

export default Blog_description