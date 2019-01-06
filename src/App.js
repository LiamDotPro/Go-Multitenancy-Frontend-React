import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import LoginContainer from "./containers/LoginContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <LoginContainer/>
            </BrowserRouter>
        );
    }
}

export default App;
