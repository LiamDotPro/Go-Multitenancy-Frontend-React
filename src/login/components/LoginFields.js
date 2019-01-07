import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/LoginFieldsStyles.scss'
import '../styles/LoginSharedStyles.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from '@fortawesome/free-solid-svg-icons/faKey'

class LoginFields extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <div className="LoginFields">
                <div className="login-form-header">
                    <h3>Login</h3>
                    <Link to={'/login/create'}><FontAwesomeIcon color={'#2c3539'} icon={faKey}/> Create Account</Link>
                </div>
                <form className="basic-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control " id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group forgot-password">
                        <p className="forgot-password">Forgot Password?</p>
                    </div>
                    <button type="submit" className="btn btn-primary btn-login-fit">Sign In</button>
                </form>
            </div>
        );
    }

}

export default LoginFields;
