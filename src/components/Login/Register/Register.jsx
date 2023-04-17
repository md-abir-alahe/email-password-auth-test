import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.email);
        // console.log(event.target.email.value);
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
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
        <div>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input  onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;