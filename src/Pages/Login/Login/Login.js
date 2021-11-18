import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { signInUsingGoogle } = useAuth();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;