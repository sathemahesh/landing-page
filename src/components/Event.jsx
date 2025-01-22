import React from 'react'
import { BsCarFrontFill } from "react-icons/bs";
import './Event.css'
const Event = () => {
    return (
        <div className="container text-center py-5 background_image">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="row d-flex flex-column me-3">
                        <div className="col mb-3">
                            <div className="card card__shadow" >
                                <div className="card-body">
                                    <BsCarFrontFill className="text-danger fs-1" />
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card__shadow">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card card__shadow">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div className="col py-5 style1" >
                    <h1 className="style2">Events
                        Why You Should Join The Events?</h1>
                    <p className="style2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ip suspendisse ultrices gravida. Risus commodo
                    </p>

                    <button className="btn btn-outline-danger">Join event</button>
                </div>
            </div>
        </div>
    )
}

export default Event