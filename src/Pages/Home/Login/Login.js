import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './Login.css'

const Login = () => {
    return (
        <div>
            <form>
                <h2>Login</h2>
                <input className='input-field' type="email" name="" id="" placeholder='Email' /> <br />
                <input className='input-field' type="password" name="" id="" placeholder='Password' /> <br />
                <p>New User? <Link to='/sign-up'><span>Create Account</span></Link></p>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <span className='icons'> <FaGoogle className='icons'></FaGoogle></span>
        </div>
    );
};

export default Login;