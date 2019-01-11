import React from 'react';
import '../styles/HeaderStyles.scss'

const Header = () => {

    return (
        <div className="Header">
            <div className="container header-content">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Go-Multitenancy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="#">Docs</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="#">Cli</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="#">Purchase</a>
                            </li>

                        </ul>
                        <div className="version-number">
                            <div className="tags has-addons">
                                <span className="tag">Current Stable Version:</span>
                                <p className="tag go-blue">0.0.1</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );

};

Header.propTypes = {};

export default Header;