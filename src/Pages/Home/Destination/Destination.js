import React from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';

const Destination = ({ dest }) => {
    const { _id, destination, expense, description, img } = dest;
    return (
        <div className="destination pb-3">
            <img src={img} alt="" />
            <h3>{destination}</h3>
            <h5>Expense: {expense}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now {destination.toUpperCase()}</button>
            </Link>
        </div>
    );
};

export default Destination;