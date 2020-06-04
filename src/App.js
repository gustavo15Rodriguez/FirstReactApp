import React  from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./modules/login/containers/Login";
import Register from "./modules/login/containers/Register";

const loginNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'LOGIN'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'REGISTRO'
        }
    }
});

export default createAppContainer(loginNavigator);