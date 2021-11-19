import React, { useEffect, useState } from 'react';
import './Home.css'
import Nav from '../Nav/Nav';
import Service from '../Service/Service';
import Banner from '../Banner/Banner';

const Home = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://grisly-cat-19256.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (
        <div>
            <Banner></Banner>
            <div className="add-service pb-3 d-flex justify-content-center">
                {
                    datas.map(data =>
                        <div class="card" style={{ "width": "18rem" }}>
                            <img src={data.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Budget:{data.budget}</p>
                                <p class="card-text">{data.place}</p>
                                <small class="card-text">{data.des}</small>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>


    );
};

export default Home;

// <div className="service pb-3">
// <img src={data.img} alt="" />
// <h3>{data.budget}</h3>
// <h3>{data.place}</h3>
// </div>