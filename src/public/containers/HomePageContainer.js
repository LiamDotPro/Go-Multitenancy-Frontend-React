import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class HomePageContainer extends React.Component {

    render() {
        return (
            <div className="PublicContainer">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default HomePageContainer;