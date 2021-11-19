import React, { useEffect, useState } from 'react';

const MyOrder = () => {

    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [control]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
                // console.log(data);
            });
        console.log(id);
    };
    return (
        <div>
            <h1>My orders </h1>

            <div className="services">
                <div className="row container">
                    {services.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.img} alt="" />
                                </div>

                                <h6>{pd?.place}</h6>
                                <p>{pd?.des}</p>
                                <h3 className="text-danger"> Cost :{pd?.budget}$</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;