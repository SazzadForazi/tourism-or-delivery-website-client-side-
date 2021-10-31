import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInGoogle } = useAuth();



    return (
        <div>
            <br /><br /><br /><br /><br />
            <h5>Please Google SignIn</h5>
            <button onClick={signInGoogle} className="btn btn-primary">Google SignIn</button>
            <br /><br /><br /><br /><br />
        </div>

    );
};

export default Login;