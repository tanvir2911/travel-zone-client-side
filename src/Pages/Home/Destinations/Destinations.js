import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import './Destinations.css';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('https://limitless-everglades-94936.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, [])

    return (
        <div id="destinations">
            <h2 className="text-primary mt-5">Find Destinations</h2>
            <div className="destination-container">
                {
                    destinations.map(destination => <Destination
                        key={destination._id}
                        dest={destination}
                    ></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;