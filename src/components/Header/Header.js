import React from 'react';
import Menubar from '../Menubar/Menubar';
import logo1 from '../../images/banner .jpg';
import logo2 from '../../images/banner.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-info bg-gradient bg-opacity-50">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <img src={logo1} alt="" />
                </div>
                <div className="col-12 col-lg-6">
                    <Menubar></Menubar>
                </div>
                <div className="col-12 col-lg-3 me-0 hidden">
                    <img src={logo2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;