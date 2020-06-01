import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput
} from 'react-native';

class Home extends Component {
    greet = () => {
        Alert.alert('Es un gusto tenerte aqui.');
    }
    render() {
        return (
            <ImageBackground source={ require('./assets/background.jpg')} style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={ require('./assets/welcome.png') } style={styles.logo} />
                    </View>

                    <View style={styles.headerRight}>
                        <Button title="Saludo" onPress={ this.greet } />
                    </View>
                </View>

                <View style={styles.body}>
                    <TouchableOpacity>
                        <Text
                            style={[
                                styles.textColor,
                                styles.fonts
                            ]}
                        >¡¡¡Bienvenidos!!!</Text>
                        <TextInput
                            placeholder="Ingresa tu nombre..."
                            placeholderTextColor='white'
                            maxLength={15}
                            style={styles.textInput}
                        >

                        </TextInput>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <View style={ styles.footerLeft }>
                        <Text style={[styles.textColor, styles.fonts]}>@User</Text>
                    </View>

                    <View style={styles.footerCenter}>
                        <Text style={[styles.textColor, styles.fonts]}>¡Saludos!</Text>
                    </View>

                    <View style={styles.footerRight}>
                        <Image source={ require('./assets/users.png') } style={styles.logo} />
                    </View>
                </View>
            </ImageBackground>
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

    body: {
        flex: 1,
        alignItems: 'center',
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

    footer: {
        flex: 0.3,
        flexDirection: 'row',
        marginBottom: 40,
        alignItems: 'center',
    },

    footerLeft: {
        flex: 1,
        marginLeft: 25
    },

    footerCenter: {
        flex: 1,
    },

    footerRight: {
        flex: 1,
    },
});

export default Home;
