import React from 'react';
import '../styles/LoginStyles.scss';
import LoginFieldContainer from "../containers/LoginFieldContainer";

const LoginPopUpBox = () => {

    return (
        <div className="LoginPopUpBox">
            <div className="box-container">
                <div className="art-section">
                    <img src={require('../assets/phone.svg')} alt="login splash artwork"/>
                </div>
                <div className="skew">
                    <div className="angle">

                    </div>
                </div>
                <div className="login-box-area">
                    <div className="row">
                        <div className="col-xs-12">
                            <LoginFieldContainer/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-login-container d-none d-sm-block">

            </div>
        </div>
    );

};

LoginPopUpBox.propTypes = {};

export default LoginPopUpBox;
