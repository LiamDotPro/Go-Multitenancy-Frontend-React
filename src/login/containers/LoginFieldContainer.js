import React from 'react';
import {Route} from "react-router-dom";
import HostSelector from "../components/HostSelector";
import LoginFields from "../components/LoginFields";
import CreateAccount from "../components/CreateAccount";
import TermsAndConditionsArea from "../components/TermsAndConditionsArea";

class LoginFieldContainer extends React.Component {

    render() {
        return (
            <div className="LoginFieldContainer">
                <HostSelector/>
                <div className="inner-popup-box">
                    <Route path="/login" component={LoginFields}/>
                    <Route path="/login/create" component={CreateAccount}/>
                </div>
                <TermsAndConditionsArea/>
            </div>
        );
    }

}

export default LoginFieldContainer;
