import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../image/404.jpg'
const Notfound = () => {
    return (
        <div>
            <img src={notfound} alt="" /> <br />
        </div>
    );
};

export default Notfound;