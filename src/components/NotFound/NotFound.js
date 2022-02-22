import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-danger my-5 py-5">Can't Found Status: 404</h1>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;