import React from 'react';
import image_8 from '../assets/image_8.png';
import image_9 from '../assets/image_9.png';
import image_10 from '../assets/image_10.png';

function Sponser() {
    return (
        <div className="container mb-5">
            <div className="row text-center mb-4">
                <div className="col">
                    <h1 className="heading" style={{ color: "#707070" }}>Our Partners</h1>
                    <h2 className="heading1" style={{ color: "#707070" }}>Our Perfect Partners & Sponsors</h2>
                </div>
            </div>

            <div className="row">
                {/* Row 1 */}
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_8} alt="Sponsor 1" className="img-fluid border" />
                </div>
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_9} alt="Sponsor 2" className="img-fluid border" />
                </div>
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_10} alt="Sponsor 3" className="img-fluid border" />
                </div>
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_10} alt="Sponsor 4" className="img-fluid border" />
                </div>

                {/* Row 2 */}
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_10} alt="Sponsor 5" className="img-fluid border" />
                </div>
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_9} alt="Sponsor 6" className="img-fluid border" />
                </div>
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_8} alt="Sponsor 7" className="img-fluid border" />
                </div>
                <div className="col-6 col-md-3 mb-4 col-12">
                    <img src={image_8} alt="Sponsor 8" className="img-fluid border" />
                </div>
            </div>
        </div>
    );
}

export default Sponser;
