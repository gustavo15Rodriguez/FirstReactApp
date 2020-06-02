import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput
} from 'react-native';

class Header extends Component {
    greet = () => {
        Alert.alert('Es un gusto tenerte aqui.');
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={ require('../assets/welcome.png') } style={styles.logo} />
                </View>

                <View style={styles.headerRight}>
                    <Button title="Saludo" onPress={ this.greet } />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },

    header: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 40
    },

    headerLeft: {
        flex: 1,
    },

    headerRight: {
        flex: 1,
        marginRight: 10
    },

    fonts: {
        fontWeight: 'bold',
    },

    textColor: {
        color: 'white'
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        marginTop: 10
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'contain'
    },
});

export default Header;
