import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Services.css'
const Services = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    }
    return (
        <div className='add-service'>
            <h2>Our services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place", { required: true, maxLength: 20 })} placeholder='place' />
                <textarea {...register("des")} placeholder='description' />
                <input type="number" {...register("budget")} placeholder='Budget' />
                <input {...register("img")} placeholder='imgage URL' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Services;