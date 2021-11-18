import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';
;

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const ids = Object.keys(savedCart);
        fetch('https://limitless-everglades-94936.herokuapp.com/destinations/byIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(destinations => {
                console.log(destinations);
                if (destinations.length) {
                    const storedCart = [];
                    for (const id in savedCart) {
                        const addedDestination = destinations.find(destination => destination.id === id);
                        if (addedDestination) {
                            // set quantity
                            const quantity = savedCart[id];
                            addedDestination.quantity = quantity;
                            storedCart.push(addedDestination);
                        }
                    }
                    setCart(storedCart);
                }
            })


    }, []);

    return [cart, setCart];
}

export default useCart;