import React, { Component }  from 'react';
import {StyleSheet, Text, Button, TextInput, Alert, ImageBackground} from 'react-native';
import AppLayout from "./AppLayout";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isTrue: true
        }
    }

    Login = () => {
        if (this.props.username == this.state.username && this.props.password == this.state.password) {
            this.setState({
                isTrue: false
            })
            return <AppLayout username={this.state.username} />
        } else {
            this.setState({
                isTrue: true
            })
            Alert.alert("Usuario o contraseña incorrectos.")
        }
    }

    render() {
        return (
            this.state.isTrue
                ?
                <ImageBackground source={ require('../assets/initial.jpg')} style={styles.container}>
                    <Text style={styles.fonts}>LOGIN</Text>
                    <TextInput
                        placeholder="Usuario..."
                        onChangeText={ (username) => { this.setState({username})}}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Contraseña..."
                        onChangeText={ (password) => { this.setState({password})}}
                    />
                    <Button
                        title="Ingresar"
                        onPress=
                        {
                            this.Login
                        }
                    />
                </ImageBackground>
                :
                <AppLayout username={this.state.username} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F781',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fonts: {
        fontWeight: 'bold',
    },
});

export default Login;