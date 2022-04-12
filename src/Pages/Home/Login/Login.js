import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,

        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth); // user and google same but google for only google this is i use for my benefits

    const emailHandler = event => {
        setEmail(event.target.value)
    }
    const passwordHandler = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const loginHandler = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    // console.log(googleUser);
    return (
        <div>
            <form onSubmit={loginHandler}>
                <h2>Login</h2>
                <input onBlur={emailHandler} className='input-field' type="email" name="" id="" placeholder='Email' /> <br />
                <input onBlur={passwordHandler} className='input-field' type="password" name="" id="" placeholder='Password' /> <br />
                <p>New User? <Link to='/sign-up'><span>Create Account</span></Link></p>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <span onClick={() => signInWithGoogle()} className='icons'> <FaGoogle className='icons'></FaGoogle></span>
        </div>
    );
};

export default Login;