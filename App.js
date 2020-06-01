import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUser: 0,
            username: '@user'
        }
    }

    changeUser = () => {
        this.setState({
            addUser: this.state.addUser + 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Bienvenido { this.state.username }</Text>
                <Text>Haz sumado { this.state.addUser } veces.</Text>
                <TextInput
                    placeholder="Nombre de usuario..."
                    onChangeText={ (username) => { this.setState({username})}}
                />
                <Button title="Sumar usuarios" onPress={ this.changeUser } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FE9A2E',
        alignItems: 'center',
        justifyContent: 'center',
    },
});