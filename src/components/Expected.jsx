import React from 'react';
import '../styling/Expected.css';
import image_5 from '../assets/image_5.jpg';
import image_6 from '../assets/image_6.jpg';

function Expected() {
    // Array of event data
    const events = [
        {
            time: '8:00 AM - 10:00 PM',
            title: 'Opening Ceremony',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Exploration Hall', 'Hall 01'],
            speaker: {
                name: 'Jesus Holland',
                role: 'Host & Speaker',
                image: image_5
            },
            mahesh: "#F8669E"
        },
        {
            time: '9:00 AM - 11:00 AM',
            title: 'Digital Marketing Workshop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Exploration Hall', 'Hall 02'],
            speaker: {
                name: 'Ricky Malone',
                role: 'Host & Speaker',
                image: image_6
            },
             mahesh: "#F8669E"
        },
        {
            time: '10:00 AM - 12:00 PM',
            title: 'Networking Break',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Networking Area'],
            speaker: {
                name: 'Nelly Bell',
                role: 'Host & Speaker',
                image: image_5
            },
             mahesh: "#F8669E"
        },
        {
            time: '12:00 AM - 12:00 PM',
            title: 'Networking',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea exercitationem quidem dolores reprehenderit rem laudantium voluptate eveniet quis labore!',
            location: ['Networking'],
            speaker: {
                name: 'Nelly Bell',
                role: 'Host & Speaker',
                image: image_5
            },
             mahesh: "#F8669E"
        }
    ];

    return (
        <div className="container mb-5">
            <div className="mb-5 style_1">
                <h4 className="text-lg-start text-center">Event Conference Organisation</h4>
                <div className="d-flex justify-content-lg-start justify-content-center">
                    <h2 className="ah-headline mb-0 latters rotate-3 h2-style text-lg-start text-center">
                        <span>List of planned Events that are</span>
                        <span className="">Expected</span>
                    </h2>
                </div>
            </div>

            {events.map((event, index) => (
    <div key={index} className="event-card mb-4">
        <div className="row mt-4">
            <div className="col-lg-3 col-md-4 col-sm-12 d-flex col-color" style={{ backgroundColor: event.mahesh }}>
                <div className="text-center text-lg-start p-4 py-8 bg-theme w-100">
                    <small className="white mb-2">{event.time}</small>
                    <h4 className="white mb-0">{event.title}</h4>
                </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 d-flex">
                <div className="schedule-content text-lg-start text-center py-4">
                    <h4 className="mb-1">Introduce the Event</h4>
                    <p className="mb-3">{event.description}</p>
                    <ul className="schedule-items d-flex justify-content-lg-start justify-content-center">
                        {event.location.map((loc, idx) => (
                            <li key={idx} className="d-flex align-items-center me-4">{loc}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 d-flex align-items-center">
                <div className="text-center text-lg-start w-100 d-flex align-items-center">
                    <img src={event.speaker.image} alt="Speaker" className="image-fluid" />
                    <div className="ms-3">
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
