import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Route} from "react-router-dom";
import HomepageContainer from "./HomepageContainer";
import DocsContainer from "./DocsContainer";
import CliContainer from "./CliContainer";

class PublicContainer extends React.Component {

    render() {
        return (
            <div className="PublicContainer">
                <Header/>
                <Route path="/" Component={HomepageContainer}/>
                <Route path="/docs" Component={DocsContainer}/>
                <Route path="/cli" Component={CliContainer}/>
                <Footer/>
            </div>
        );
    }

}

export default PublicContainer;