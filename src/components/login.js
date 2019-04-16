import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { username:'',password:'' }

    handleChange = (e) => {
        this.setState({ username: e.target.value,password: this.state.password });
    }

    handleChange2 = (e) => {
        this.setState({ username: this.state.username,password:e.target.value});
    }

    render() { 
        return ( 
            <div className="wrapper">
                <h1>Login</h1>
                <div><span>Name: </span><input type="text" onChange={this.handleChange} /></div>
                <div><span>Password: </span><input type="text" onChange={this.handleChange2} /></div>
                <Link to="/"><button onClick={() => this.props.updateUser(this.state.username,this.state.password)}>Submit</button></Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (name, password) => {
            dispatch({
                type: 'UPDATE_USER',
                user: {
                    name: name,
                    password: password,
                    in: true
                }
            })
        }
    }
}
 
export default connect(null, mapDispatchToProps)(Login);