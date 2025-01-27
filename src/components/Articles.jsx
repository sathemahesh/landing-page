import React from 'react';
import Article from '../styling/Article.css';
import ecommerce from '../assets/ecommerce.jpg';
import insperation from '../assets/insperation.jpg';

function Articles() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col text-center">
                    <h5 className="s1">Our News & Articles</h5>
                    <h1 className="s2">Our News & Articles</h1>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={ecommerce} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070" }}>
                                Continue Reading
                            </a>
                        </div>
                        <div className="card-text">
                            <a href="#" className="card-link" style={{ color: "#707070" }}>
                                August 25, 2022 | No Comments
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={insperation} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070" }}>
                                Continue Reading
                            </a>
                        </div>
                        <div className="card-text">
                            <a href="#" className="card-link" style={{ color: "#707070" }}>
                                August 25, 2022 | No Comments
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={insperation} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <div className="card-body card-text">
                            <a href="#" className="card-link" style={{ color: "#707070" }}>
                                Continue Reading
                            </a>
                        </div>
                        <div className="card-text">
                            <a href="#" className="card-link" style={{ color: "#707070" }}>
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
