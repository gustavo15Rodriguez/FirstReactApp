import React  from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./modules/login/containers/Login";
import Register from "./modules/login/containers/Register";
import Home from "./modules/Home/containers/Home";

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
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'HOME'
        }
    }
});

export default createAppContainer(loginNavigator);