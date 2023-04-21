import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] =useState('');

    const handleSubmit = (event) =>{
        setSuccess('');
        // 1. prevent page refresh
        event.preventDefault();
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.email);
        // console.log(event.target.email.value);

        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        // create use by using firebase

        // 3. create user in fb
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            // clear error message if there isn't
            setError('');
            // reset field value if there isn't any error
            event.target.reset();
            // if user created successfully show success message 
            setSuccess('User has created successfully');
            // 
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
            // if user created unSuccessful 
            setSuccess('');
        })
        }

    // get value with onChang event handler
    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        // setEmail(event.target.value)
    }
    // get value with onBlur event handler
    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }


    return (
        <div onSubmit={handleSubmit} className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded'  onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded'  onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-danger'>{success}</p>
        </div>
    );
};

export default Register;