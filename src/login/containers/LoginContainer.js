import React from 'react';
import {connect} from 'react-redux';
import {add, subtract} from '../../store/actions/IncrementNumber'
import LoginArea from "../components/LoginArea";

class LoginContainer extends React.Component {

    render() {
        return (
            <div className="LoginContainer">
                <div className="container-fluid nopad">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <LoginArea/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props);
    }

}

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract())
});

const mapStateToProps = state => ({
    number: state.numberReducer.number,
    ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);