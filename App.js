import React, { Component }  from 'react';
import Login from "./components/Login";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '@gustavo15',
            password: 12345,
        }
    }

    render() {
        return (
            <Login
                username={ this.state.username }
                password={this.state.password}
            />
        );
    }
}