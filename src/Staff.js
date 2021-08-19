import React, { Component } from 'react';
import NavBar from './NavBar';

export class Protected extends Component {
    render() {
        return (
            <>
                <NavBar />
                <h1>Staff</h1>
            </>
        )
    }
}

export default Protected
