import React from 'react';
import {connect} from 'react-redux';
import {add, subtract} from '../store/actions/IncrementNumber'

class LoginContainer extends React.Component {

    render() {
        return (
            <div className="LoginContainer">
                <h1>Login Container Loaded</h1>
                <h3>number: {this.props.number}</h3>
                <button onClick={this.props.add}>add</button>
                <button onClick={this.props.subtract}>sub</button>
            </div>
        );
    }

    componentDidMount(){
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