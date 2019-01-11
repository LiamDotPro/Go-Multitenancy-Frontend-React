import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import LoginContainer from "./login/containers/LoginContainer";
import HomePageContainer from "./public/containers/HomePageContainer";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/" component={HomePageContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
