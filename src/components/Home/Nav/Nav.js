import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Nav.css'
const Nav = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="MenuBar-container navbar-expand-lg navbar sticky-top navbar navbar-light bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>

                                <Link to="/addservice" className="items">
                                    <li>Add Service</li>
                                </Link>
                                <Link to="/contact" className="items">
                                    <li>ContactUs</li>
                                </Link>
                                {user?.email ?
                                    <Link to='/login'>
                                        <button onClick={logOut} className='btn btn-warning me-2'>Log Out</button>
                                    </Link>

                                    :
                                    <Link to='/login'>
                                        <button className='btn btn-warning me-2'>Log In</button>
                                    </Link>
                                }
                                <div>
                                    <h5>{user?.displayName}</h5>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;