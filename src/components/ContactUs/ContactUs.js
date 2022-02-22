import React from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState(null);
    const [message, setMessage] = useState('');

    const nameChange = e => {
        const name = e.target.value;
        setName(name);
    }
    const emailChange = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const numberChange = e => {
        const number = e.target.value;
        setNumber(number);
    }
    const messageChange = e => {
        const message = e.target.value;
        setMessage(message);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const info = {
            name,
            email,
            number,
            message
        }
        console.log(info);
        localStorage.setItem('info', JSON.stringify(info));
        e.target.reset();
    }

    return (
        <div>
            <Header></Header>
            <div className="w-50 mx-auto my-5">

                <h2 className="text-primary fw-bold text-center">Contact Us</h2>
                <p className="text-center">Send us your feedback !!!</p>

                <form onSubmit={handleSubmit}>
                    <h6>Your Name <span className="text-danger fs-4">*</span></h6>
                    <input type="text" onBlur={nameChange} required className="w-100" />

                    <h6>Email <span className="text-danger fs-4">*</span></h6>
                    <input type="email" onBlur={emailChange} required className="w-100" />

                    <h6>Mobile <span className="text-danger fs-4">*</span></h6>
                    <input type="number" onBlur={numberChange} required className="w-100" />

                    <h6>Your Message <span className="text-danger fs-4">*</span></h6>
                    <textarea onBlur={messageChange} required></textarea>

                    <div className="d-flex align-items-center">
                        <input type="checkbox" />
                        <p className="ms-3 mt-3">Send me updates</p>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;