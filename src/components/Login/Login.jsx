import React from 'react';

const Login = () => {
    return (
        <div className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <form>
                <input className='w-50 mb-4 rounded' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded' type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Login;