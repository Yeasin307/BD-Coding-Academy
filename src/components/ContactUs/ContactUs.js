import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-50 mx-auto my-5">
                <h2 className="text-primary fw-bold text-center">Contact Us</h2>
                <p className="text-center fs-5">Could not find what you needed? Speak to us directly…</p>
                <h6>Your Name <span className="text-danger fs-4">*</span></h6>
                <input type="text" className="w-100" />
                <h6>Email <span className="text-danger fs-4">*</span></h6>
                <input type="email" className="w-100" />
                <h6>Mobile <span className="text-danger fs-4">*</span></h6>
                <input type="text" className="w-100" />
                <h6>Your Message <span className="text-danger fs-4">*</span></h6>
                <textarea cols="83" rows="5"></textarea>
                <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <p className="ms-3 mt-3">Send me updates</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;