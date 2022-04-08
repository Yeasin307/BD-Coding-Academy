import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <h2 className='header d-flex justify-content-center'>Welcome to BD Coding Academy</h2>
            <ul>
                <Link to="/home" className="items">
                    <li>Home</li>
                </Link>
                <Link to="/courses" className="items">
                    <li>All Courses</li>
                </Link>
                <Link to="/about" className="items">
                    <li>About us</li>
                </Link>
                <Link to="/contact" className="items">
                    <li>Contact us</li>
                </Link>
            </ul>
        </div>
    );
};

export default Menubar;