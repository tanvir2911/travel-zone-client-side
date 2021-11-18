import React, { useEffect, useState } from 'react';

const ManageDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://limitless-everglades-94936.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    const handleDelete = id => {
        const url = `https://limitless-everglades-94936.herokuapp.com/destinations/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = destinations.filter(destination => destination._id !== id);
                    setDestinations(remaining);
                }
            })
    }


    let total = 0;
    for (const destination of destinations) {
        total += destination.expense
    }

    const handleConfirm = () => {
        setDestinations([])
    }

    return (
        <div>
            <h2>Manage Destinations</h2>
            {
                destinations.map(destination => <div key={destination._id}>
                    <h3>{destination.destination}: {destination.expense}</h3>
                    <button onClick={() => handleDelete(destination._id)}>Delete</button>
                </div>)
            }
            <br />
            <br />
            <br />
            <h1>Total: {total} </h1>
            <button onClick={handleConfirm} className="btn btn-warning">Confirm Book</button>
        </div>
    );
};

export default ManageDestinations;