import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
const Booking = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});
    const email = sessionStorage.getItem("email");
    console.log(email);
    // console.log(serviceId);

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${serviceId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        data.email = email;
        data.status = "pending";
        console.log(data);
        // axios.post('http://localhost:5000/confirmOrder', data)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             alert('added successfully')
        //             reset();
        //         }
        //     })
        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);


    }
    return (
        <div className='add-service'>
            <h2>Booking List</h2>
            <img style={{ width: "400px" }} src={product.img} alt="" /><br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place", { required: true, maxLength: 20 })} defaultValue={product?.place} />
                <textarea {...register("des")} defaultValue={product?.des} />
                <input type="number" {...register("budget")} defaultValue={product?.budget} />
                <input type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Booking;