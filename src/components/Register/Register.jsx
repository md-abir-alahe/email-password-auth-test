import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] =useState('');

    const handleSubmit = (event) =>{
        setSuccess('');
        setError('');
        // 1. prevent page refresh
        event.preventDefault();
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.email);
        // console.log(event.target.email.value);

        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(name, email, password);
        // create use by using firebase

        // validate password
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one upper case.');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least two digits');
            return;
        }
        else if(password.length<6){
            setError('Your password should have contain at least 6 characters');
            return;
        }

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
            setSuccess('User has been created successfully');
            // calling email verification function and passing the parameter 
            sendVerificationEmail(loggedUser);
            updateUserData(loggedUser, name)
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
    // Email verification 
    const sendVerificationEmail = (user) =>{
        sendEmailVerification(user)
        .then(result=>{
            console.log(result);
            alert('Please verify your email address');
        })
    }
    // update user data
    const updateUserData = (user, name)=>{
        updateProfile(user,{
            displayName: name
        })
        .then(()=>{
            console.log('User name updated')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }


    return (
        <div onSubmit={handleSubmit} className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded'  type="text" name="name" id="name" placeholder='Your Name' required />
                <br />
                <input className='w-50 mb-4 rounded'  onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded'  onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p><small>Already have an account? Please <Link to={`/login`}>Login</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};



export default Register;