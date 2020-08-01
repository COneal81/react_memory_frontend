import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/userActions'

class Signup extends Component {
    state ={
        name: "",
        user_email: "",
        password: "",
        family_member_email: ""
    }

    handleOnChange = (event) => {
        event.persist();
        this.setState(() => ({
            [event.target.name]: event.target.value
        }));
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.signUpUser(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input placeholder= "Your Name" value={this.state.name} name="name" type="text" onChange={this.handleOnChange}/>
                    <input placeholder= "Email"  value={this.state.user_email} name="user_email" type="text" onChange={this.handleOnChange}/>
                    <input placeholder= "Password"  value={this.state.password} name="password" type="text" onChange={this.handleOnChange}/>
                    <input placeholder= "Family Member Email"  value={this.state.family_member_email} name="family_member_email" type="text" onChange={this.handleOnChange}/>
                    < input type="submit" value= "Signup" />
                </form>
            </div>
        
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (userInfo) => dispatch(signUpUser(userInfo)),
    };
};

export default connect(null, mapDispatchToProps)(Signup);