import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = (props) => {
    const [destination, setDestination] = useState({});
    const { destinationId } = useParams();

    useEffect(() => {
        fetch(`https://limitless-everglades-94936.herokuapp.com/destinations/${destinationId}`)
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])

    return (
        <div>
            <h2>Destination: {destination.destination}</h2>
            <h2>Booking Id: {destinationId}</h2>
            <br />
            <br />
            <button
                onClick={() => props.handleAddToCart(props.destination)}
                className="btn-regular"
            >Add to cart</button>
        </div>
    );
};

export default Booking;