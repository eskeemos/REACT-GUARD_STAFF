import React, { Component } from 'react';
import NavBar from './NavBar';

export class Protected extends Component {
    state = {
        userEmail: '',
    }

    componentDidMount(){
        const token = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            userEmail: token.idToken.claims.email
        })
    }

    render() {
        console.log();
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1>Hello User!</h1>
                    <p>Your account with email <strong>{this.state.userEmail}</strong> has been successfully registered.</p>
                    <p>Have a good time at work!</p>
                </div>
            </div>
        )
    }
}

export default Protected
