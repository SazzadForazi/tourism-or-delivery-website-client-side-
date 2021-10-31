import React from 'react';
import { useParams } from 'react-router';

const Booking = (service) => {
    const { serviceId } = useParams()
    const { place, img, budget } = service;
    return (
        <div>
            <h2>Your booking ID: {serviceId}</h2>
            <img src={img} alt="" />
            <h3>Budget:{budget}</h3>
            <h3>{place}</h3>

            <p>GeoBlue provides peace of mind to world travelers and expats living a global lifestyle by providing access to an elite network of providers, innovative mobile and online tools, the convenience of telemedicine tools and exceptional customer service. We are proud to set the standard for complete, reliable, convenient protection of your health and safety in the global community.</p>
        </div>
    );
};

export default Booking;