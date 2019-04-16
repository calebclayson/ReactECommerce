import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { username:'' }

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    render() { 
        return ( 
            <div className="wrapper">
                <h1>Login</h1>
                <input type="text" onChange={this.handleChange} />
                <Link to="/"><button onClick={() => this.props.updateUser(this.state.username)}>Submit</button></Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => {
            dispatch({
                type: 'UPDATE_USER',
                user: {
                    name: user,
                    in: true
                }
            })
        }
    }
}
 
export default connect(null, mapDispatchToProps)(Login);