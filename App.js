import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

class App extends Component {
    greet = () => {
        Alert.alert('Es un gusto tenerte aqui.');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={ require('./assets/welcome.png') } style={styles.logo} />
                    </View>

                    <View style={styles.headerRight}>
                        <Button title="Saludo" onPress={ this.greet } />
                    </View>
                </View>

                <View style={ [styles.body, styles.fonts] }>
                    <Text>¡¡¡Mi first movil app.!!!</Text>
                </View>

                <View style={ [styles.footer, styles.fonts] }>
                    <View style={styles.footerLeft}>
                        <Text>@User</Text>
                    </View>

                    <View style={ [styles.footerCenter, styles.fonts]}>
                        <Text>¡Saludos!</Text>
                    </View>

                    <View style={ [styles.footerRight, styles.fonts]}>
                        <Image source={ require('./assets/users.png') } style={styles.logo} />
                    </View>
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

    body: {
        flex: 1,
        alignItems: 'center',
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

export default App;
