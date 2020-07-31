import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logUserOut} from '../actions/userActions'
import Button from 'react-bootstrap/Button';

class Logout extends Component {
    onClick = (event) => {
        event.preventDefault();
        this.props.logUserOut();
        this.props.history.push("/")
    };

    render() {
        return (
            <div>
                <Button 
                onClick={this.onClick}
                value="Logout">
                    Logout
                </Button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(logUserOut())
    }
}


export default connect(null, mapDispatchToProps)(Logout)