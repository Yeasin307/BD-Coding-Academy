import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-danger fw-bold my-5 py-5">Can't Found Error 404</h1>
            <Footer></Footer>
        </div>
    );
};

export default Error;