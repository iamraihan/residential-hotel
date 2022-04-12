import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase.init';
import { ErrorFactory } from '@firebase/util';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const emailHandler = event => {
        setEmail(event.target.value)
    }
    const passwordHandler = event => {
        setPassword(event.target.value)
    }
    const confirmPasswordHandler = event => {
        setConfirmPassword(event.target.value)
    }
    const creatUserHandler = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Not match your password..!!')

            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <form onSubmit={creatUserHandler}>
                <h2>Login</h2>
                <input onBlur={emailHandler} className='input-field' type="email" name="" id="" placeholder='Email' /> <br />
                <input onBlur={passwordHandler} className='input-field' type="password" name="" id="" placeholder='Password' /> <br />
                <input onBlur={confirmPasswordHandler} className='input-field' type="password" name="" id="" placeholder='Confirm Password' /> <br />
                <p style={{ color: 'red' }}>{error}</p>
                <p>Already Account? <Link to='/login'><span>Login</span></Link></p>
                <input className='submit-btn' type="submit" value="Sign Up" />
            </form>
            <span className='icons'> <FaGoogle className='icons'></FaGoogle></span>
        </div>
    );
};

export default SignUp;