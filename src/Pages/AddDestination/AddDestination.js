import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://limitless-everglades-94936.herokuapp.com/addDestinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div className="add-destination">
            <h2>Please Add a Destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("destination", { required: true, maxLength: 20 })} placeholder="Destination" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("expense")} placeholder="Expense" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddDestination;