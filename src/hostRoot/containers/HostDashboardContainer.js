import React from 'react';
import {connect} from 'react-redux';

class HostDashboardContainer extends React.Component {

    render() {
        return (
            <div className="HostDashboardContainer">

            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);