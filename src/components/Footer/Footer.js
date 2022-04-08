import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="bg-secondary bg-gradient bg-opacity-50 pb-1">
            <div className="d-flex justify-content-center pt-5">
                <h3>Join with us : </h3>
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="text-primary mx-3" />
                </a>
                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="text-dark mx-3" />
                </a>
                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="text-danger mx-3" />
                </a>
            </div>
            <p className="text-center py-4">Copyright © 2021 BD Coding Academy</p>
        </div>
    );
};

export default Footer;