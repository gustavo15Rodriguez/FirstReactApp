import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image
} from 'react-native';

class Footer extends Component {

    render() {
        return (
            <View style={styles.footer}>
                <View style={ styles.footerLeft }>
                    <Text style={[styles.textColor, styles.fonts]}>@User</Text>
                </View>

                <View style={styles.footerCenter}>
                    <Text style={[styles.textColor, styles.fonts]}>¡Saludos!</Text>
                </View>

                <View style={styles.footerRight}>
                    <Image source={ require('../assets/users.png') } style={styles.logo} />
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

export default Footer;
