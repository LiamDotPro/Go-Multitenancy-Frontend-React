import React from 'react';
import {Route} from "react-router-dom";
import HostSelector from "../components/HostSelector";
import LoginFields from "../components/LoginFields";
import CreateAccount from "../components/CreateAccount";
import TermsAndConditionsArea from "../components/TermsAndConditionsArea";
import BackSection from '../components/BackSection'

class LoginFieldContainer extends React.Component {

    render() {
        return (
            <div className="LoginFieldContainer">
                <HostSelector/>
                <BackSection/>
                <div className="inner-popup-box">
                    <Route path="/login" exact component={LoginFields}/>
                    <Route path="/login/create" exact component={CreateAccount}/>
                </div>
                <TermsAndConditionsArea/>
            </div>
        );
    }

}

export default LoginFieldContainer;
