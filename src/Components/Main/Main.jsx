import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return <div className='bg-dark'>
    
    
        <Navbar />

        <Outlet />
    
    </div>
}

export default Main;
