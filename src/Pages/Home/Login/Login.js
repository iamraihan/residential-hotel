import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/')
    }
    const emailHandler = event => {
        setEmail(event.target.value)
    }
    const passwordHandler = event => {
        setPassword(event.target.value)
    }

    const loginHandler = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <form onSubmit={loginHandler}>
                <h2>Login</h2>
                <input onBlur={emailHandler} className='input-field' type="email" name="" id="" placeholder='Email' /> <br />
                <input onBlur={passwordHandler} className='input-field' type="password" name="" id="" placeholder='Password' /> <br />
                <p>New User? <Link to='/sign-up'><span>Create Account</span></Link></p>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <span className='icons'> <FaGoogle className='icons'></FaGoogle></span>
        </div>
    );
};

export default Login;