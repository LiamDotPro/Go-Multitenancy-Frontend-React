import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import LoginContainer from "./login/containers/LoginContainer";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/login" component={LoginContainer}/>
            </BrowserRouter>
        );
    }
}

export default App;
