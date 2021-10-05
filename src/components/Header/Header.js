import React from 'react';
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <div className="bg-secondary">
            <Menubar></Menubar>
            <h2 className="text-center pb-4">Welcome to Our Online Coding Academy</h2>
        </div>
    );
};

export default Header;