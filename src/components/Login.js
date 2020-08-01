import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUser} from '../actions/userActions'


class Login extends Component {
    state = {
        user_email: "",
        password: "",
    }

    handleOnChange = (event) => {
        event.persist();
        this.setState(() => ({
           [event.target.name]: event.target.value 
        }))
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.fetchUser(this.state)
    }

    componentDidMount(){
        if (this.props.userReducer.loggedIn) {
            this.props.history.push("/");
        } else{

        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input placeholder= "Email"  value={this.state.user_email} name="user_email" type="text" onChange={this.handleOnChange}/>
                    <input placeholder= "Password"  value={this.state.password} name="password" type="text" onChange={this.handleOnChange}/>
                    < input type="submit" value= "Login" />
                </form>
            </div>
        
        )
    }
}

// Read only ~ Gets the state from the store and allows us to use them as props. Its gives us an arguement that we can destructure.
    const mapStateToProps = (state) => {
        return {
            userReducer: state.userReducer,
        };
    };


    const mapDispatchToProps = (dispatch) => {
        return {
            fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Login);

    

    