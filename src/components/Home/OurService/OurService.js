import React from 'react';
import { Link } from 'react-router-dom';
import './OurService.css'
const OurService = ({ service }) => {
    const { _id, place, des, img, budget } = service;

    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>Budget : {budget}</h3>
            <h3>{place}</h3>
            <p className="px-3">{des}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {place.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default OurService;