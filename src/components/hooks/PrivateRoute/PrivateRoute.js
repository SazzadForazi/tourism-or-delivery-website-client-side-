import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if (isloading) {
        return <Spinner animation="grow" variant="secondary" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}

            ></Redirect>
            }
        >

        </Route >
    );
};

export default PrivateRoute;