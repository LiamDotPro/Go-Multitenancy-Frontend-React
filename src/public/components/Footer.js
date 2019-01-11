import React from 'react';
import '../styles/FooterStyles.scss';

const Footer = () => {

    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="footer-text">Developed and maintained by Liam Read</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

Footer.propTypes = {};

export default Footer;