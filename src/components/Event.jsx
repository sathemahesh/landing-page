import React from 'react'
import { BsCarFrontFill } from "react-icons/bs";

const Event = () => {
    return (
        <div className="container text-center py-5">
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
                <div className="col">
                    Column
                </div>
            </div>
        </div>
    )
}

export default Event