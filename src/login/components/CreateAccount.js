import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {Link} from "react-router-dom";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

const CreateAccount = () => {

    return (
        <div className="CreateAccount">
            <div className="login-form-header">
                <h3>Create Account</h3>
                <Link to={'/login'}><FontAwesomeIcon color={'#2c3539'} icon={faUser}/> Login</Link>
            </div>
        </div>
    );

};

CreateAccount.propTypes = {};

export default CreateAccount;
