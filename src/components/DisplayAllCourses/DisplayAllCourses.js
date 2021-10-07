import React from 'react';

const DisplayAllCourses = (props) => {
    const { title, img, fees } = props.course;
    return (
        <div className="col-3 mb-3">
            <div className="bg-light bg-opacity-100 border border-primary border-3 rounded shadow-lg" style={{ height: '350px' }}>
                <div className="h-100">
                    <img src={img} className="w-100 h-50" alt=""></img>
                    <h5 className="px-2 pt-2 text-primary fw-bold">Course title : {title}</h5>
                    <div className=" d-flex align-items-center flex-column mb-2">
                        <h4 className="px-2">Fees : {fees} TK</h4>
                        <button className="btn btn-primary fw-bold"> Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayAllCourses;