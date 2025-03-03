import React from 'react';
import image_8 from '../assets/image_8.png';
import image_9 from '../assets/image_9.png';
import image_10 from '../assets/image_10.png';

const sponsors = [
    { src: image_8, alt: "Sponsor 1" },
    { src: image_9, alt: "Sponsor 2" },
    { src: image_10, alt: "Sponsor 3" },
    { src: image_10, alt: "Sponsor 4" },
    { src: image_10, alt: "Sponsor 5" },
    { src: image_9, alt: "Sponsor 6" },
    { src: image_8, alt: "Sponsor 7" },
    { src: image_8, alt: "Sponsor 8" }
];

function Sponser() {
    return (
        <div className="container mb-5">
            <div className="row text-center mb-4">
                <div className="col">
                    <h1 className="heading title_wrap" style={{ color: "#F8669E", fontFamily: "sans-serif", fontSize:"21px"}}>Our Partners</h1>
                    <h2 className="heading1 title_wrap text-center" style={{ color: "#333369", fontFamily: "sans-serif",fontSize:"56px"}}>Our Perfect Partners &</h2>
                    <h2 className="heading1 title_wrap text-center" style={{ color: "#F8669E", fontFamily: "sans-serif", fontSize: "56px" }}> Sponsors</h2>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="col">
                            <div className="border d-flex align-items-center justify-content-center p-2">
                                <img
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className="img-fluid w-100"
                                    style={{ maxWidth: "250px" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Sponser;
