import React from 'react';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {

    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="LoginContainer">
                <h1>Login Container Loaded</h1>
            </div>
        );
    }

}

export default connect()(LoginContainer);