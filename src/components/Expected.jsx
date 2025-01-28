import React from 'react';
import '../styling/Expected.css';
import image_5 from '../assets/image_5.jpg';
import image_6 from '../assets/image_6.jpg';

function Expected() {
    const events = [
        {
            time: '8:00 AM - 10:00 PM',
            title: 'Opening Ceremony',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Exploration Hall', 'Hall 01'],
            speaker: {
                name: 'Jesus Holland',
                role: 'Host & Speaker',
                image: image_5,
            },
            mahesh: "#F8669E",
        },
        {
            time: '9:00 AM - 11:00 AM',
            title: 'Digital Marketing Workshop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Exploration Hall', 'Hall 02'],
            speaker: {
                name: 'Ricky Malone',
                role: 'Host & Speaker',
                image: image_6,
            },
            mahesh: "#F8669E",
        },
        {
            time: '10:00 AM - 12:00 PM',
            title: 'Networking Break',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Networking Area'],
            speaker: {
                name: 'Nelly Bell',
                role: 'Host & Speaker',
                image: image_5,
            },
            mahesh: "#F8669E",
        },
        {
            time: '12:00 AM - 12:00 PM',
            title: 'Networking',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Networking'],
            speaker: {
                name: 'Nelly Bell',
                role: 'Host & Speaker',
                image: image_5,
            },
            mahesh: "#F8669E",
        },
    ];

    return (
        <div className="container mb-5">
            <div className="mb-5 text-center text-lg-start">
                <h4 className="Event"style={{ fontSize:"21px"}}>Event Conference Organisation</h4>
                <h2 className=" mb-0  h2-style">
                    <div className="mb-3"><span className=""style={{color:"#333369", fontSize:"56px"}}>List of planned Events thay are</span></div>
                     <div> <span className=""style={{color:"#707070",fontSize:"56px"}}>Expected</span></div>
                   
                </h2>
            </div>

            {events.map((event, index) => (
                <div key={index} className="event-card mb-4 shadow-sm">
                    <div className="row g-0">
                        
                        <div className="col-lg-3 col-md-4 col-sm-12" style={{ backgroundColor: event.mahesh }}>
                            <div className="p-4 text-white text-center text-lg-start">
                                <small>{event.time}</small>
                                <h4>{event.title}</h4>
                            </div>
                        </div>

                        {/* Middle Column - Description and Location */}
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="p-4">
                                <h4 className="mb-2">Introduce the Event</h4>
                                <p className="mb-3">{event.description}</p>
                                <ul className="list-inline mb-0">
                                    {event.location.map((loc, idx) => (
                                        <li key={idx} className="list-inline-item me-3">
                                            <i className="bi bi-geo-alt-fill me-1"></i>
                                            {loc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        
                        <div className="col-lg-3 col-md-12 d-flex align-items-center">
                            <div className="d-flex align-items-center p-4 w-100">
                                <img
                                    src={event.speaker.image}
                                    alt="Speaker"
                                    className="img-fluid rounded-circle me-3"
                                    style={{ width: "60px", height: "60px" }}
                                />
                                <div>
                                    <h6 className="mb-0">{event.speaker.name}</h6>
                                    <small>{event.speaker.role}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Expected;
