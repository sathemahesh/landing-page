import React from 'react';
import News_style from '../styling/News_style.css';
import back from '../assets/back.jpg';

function News() {

    const colStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
    };

    // Array of card data
    const cardData = [
        { id: 1, imgSrc: '...', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 2, imgSrc: '...', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 3, imgSrc: '...', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 4, imgSrc: '...', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 5, imgSrc: '...', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 6, imgSrc: '...', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' }
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
                    <div className="col-12 col-md-8">
                        <div className="row">
                            {cardData.map((card) => (
                                <div className="col-12 col-md-6 mb-3" key={card.id}>
                                    <div className="card">
                                        <img src={card.imgSrc} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{card.text}</p>
                                        </div>
                                        <div className="card-footer text-start">
                                            <small className="text-muted">August 25, 2022 | No Comments</small>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                      
                   <div className="col">
                     
                        <input className="search-bar" type="text" placeholder="search here" style={{ width: '50%' }} />

                        <button className=" nir-btn">Search</button>
                   </div>
                </div>

               
            </div>
        </div>
    );
}

export default News;
