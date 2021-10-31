import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import OurService from '../OurService/OurService';
import Services from '../Services/Services';
import './Service.css';
const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)
            })
    }, [])

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
        <div id='services'>
            <div>

            </div>
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    service.map(service => <OurService
                        key={service.id}
                        service={service}
                    ></OurService>)
                }
            </div>
        </div>
    );
};

export default Service;