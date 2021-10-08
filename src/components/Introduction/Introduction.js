import React from 'react';
import logo from '../../images/Code-Image.png';

const Introduction = () => {
    return (
        <div>
            <div className="row bg-danger bg-opacity-25 rounded-3 m-4">
                <div className="col-3">
                    <img src={logo} style={{ width: "275px", height: "200px" }} alt="" />
                </div>
                <div className="col-9 row h-50 p-3">
                    <div className="col-6 pt-5">
                        <h3>The leading eLearning platform for certified online courses</h3>
                    </div>
                    <div className="col-6 pt-5">
                        <h5>BD Coding Academy is a place where anyone can enroll in courses, get access to exclusive contents and get skilled to be in demand .</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;