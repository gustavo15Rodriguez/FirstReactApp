import React, { Component }  from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#81DAF5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});