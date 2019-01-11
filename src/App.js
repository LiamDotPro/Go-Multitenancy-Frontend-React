import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import LoginContainer from "./login/containers/LoginContainer";
import PublicContainer from "./public/containers/PublicContainer";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/" component={PublicContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
