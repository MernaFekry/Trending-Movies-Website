import React from 'react';
import {Link, link} from 'react-router-dom';

const Navbar = () => {
    return <>
    
        <nav className='navbar navbar-expand-lg bg-dark shadow-lg'>

            <div className="container">
                <Link className='navbar-brand text-white' to='/home'>Home</Link>
                <Link className='navbar-brand text-white' to='/register'>Register</Link>
                <Link className='navbar-brand text-white' to='/login'>Login</Link>
            </div>
        </nav>

    
    </>
}

export default Navbar;
