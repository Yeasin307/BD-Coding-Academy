import React from 'react';
import Menubar from '../Menubar/Menubar';
import logo1 from '../../images/banner .jpg';
import logo2 from '../../images/banner.jpg';

const Header = () => {
    return (
        <div className="bg-info bg-gradient bg-opacity-50">
            <div className="row">
                <div className="col-3">
                    <img src={logo1} style={{ width: '300px', height: '150px' }} alt="" />
                </div>
                <div className=" col-6 d-flex justify-content-around flex-column">
                    <h2>Welcome to Our Online Coding Academy</h2>
                    <Menubar></Menubar>
                </div>
                <div className="col-3 me-0">
                    <img src={logo2} style={{ width: '300px', height: '150px' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;