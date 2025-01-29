import React from 'react';
import Article from '../styling/Article.css';
import ecommerce from '../assets/ecommerce.jpg';
import insperation from '../assets/insperation.jpg';

function Articles() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col text-center">
                    <h5 className="s1 flex-center s2-wraper" style={{  fontFamily: "sans-serif", color: "#333369" }}>Our News & Articles</h5>
                    <h1 className="s2 s2-wraper" style={{  fontFamily: "sans-serif" }}>Our News & Articles</h1>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <div style={{ position: 'relative' }}>
                            <img className="card-img-top" src={ecommerce} alt="E-commerce" />
                            <button 
                                style={{ 
                                    position: 'absolute', 
                                    top: '10px', 
                                    right: '10px', 
                                    backgroundColor: '#707070', 
                                    color: '#fff', 
                                    border: 'none', 
                                    padding: '5px 10px', 
                                    borderRadius: '5px', 
                                    cursor: 'pointer' 
                                }}
                            >
                                E-commerce
                            </button>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                Continue Reading
                            </a>
                        </div>
                        <div className="card-text mb-3 ms-3">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                August 25, 2022 | No Comments
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <div style={{ position: 'relative' }}>
                            <img className="card-img-top" src={insperation} alt="Inspiration" />
                            <button 
                                style={{ 
                                    position: 'absolute', 
                                    top: '10px', 
                                    right: '10px', 
                                    backgroundColor: '#707070', 
                                    color: '#fff', 
                                    border: 'none', 
                                    padding: '5px 10px', 
                                    borderRadius: '5px', 
                                    cursor: 'pointer' 
                                }}
                            >
                                Inspiration
                            </button>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                Continue Reading
                            </a>
                        </div>
                        <div className="card-text mb-3 ms-3">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                August 25, 2022 | No Comments
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <div style={{ position: 'relative' }}>
                            <img className="card-img-top" src={insperation} alt="Public" />
                            <button 
                                style={{ 
                                    position: 'absolute', 
                                    top: '10px', 
                                    right: '10px', 
                                    backgroundColor: '#707070', 
                                    color: '#fff', 
                                    border: 'none', 
                                    padding: '5px 10px', 
                                    borderRadius: '5px', 
                                    cursor: 'pointer' 
                                }}
                            >
                                Public
                            </button>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
                                Continue Reading
                            </a>
                        </div>
                        <div className="card-text mb-3 ms-3">
                            <a href="#" className="card-link" style={{ color: "#707070", textDecoration: "none" }}>
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
