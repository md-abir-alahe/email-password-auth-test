import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);


const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth,email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('User logged in successful.');
            setError('');
            // reset all input field of the form
            event.target.reset();
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
            setSuccess('');
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <form onSubmit={handleLogin}>
                <input className='w-50 mb-4 rounded' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded' type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Login" />
            </form>
            <p><small>New to this website? please <Link to={`/register`}>Register</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;