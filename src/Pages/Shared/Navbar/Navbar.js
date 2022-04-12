import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Navbar.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            {
                user ? <button onClick={logOut}>Sign Out</button> :
                    <Link to='/login'>Login</Link>
            }

        </nav>
    );
};

export default Navbar;