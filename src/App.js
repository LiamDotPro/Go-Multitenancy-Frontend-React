import React, {Component} from 'react';
import {BrowserRouter, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import LoginContainer from "./login/containers/LoginContainer";
import PublicContainer from "./public/containers/PublicContainer";

function getSubdomain(hostname) {
    let regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
    let urlParts = regexParse.exec(hostname);
    return hostname.replace(urlParts[0], '').slice(0, -1);
}

class App extends Component {

    constructor(props) {
        super(props);


        this.state = {
            hostState: true
        };

        if (getSubdomain(window.location.hostname).length > 0) {
            this.state.hostState = false;
            window.history.pushState('', '', './login');
        } else {
            console.log(getSubdomain(window.location.hostname));
        }

    }


    render() {
        return (
            <BrowserRouter>
                {this.state.hostState ? (
                    <div>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path="/" component={PublicContainer}/>
                    </div>
                ) : (
                    <div>
                        <Route path="/login" component={LoginContainer}/>
                    </div>
                )

                }
            </BrowserRouter>)
    }
}

export default App;
