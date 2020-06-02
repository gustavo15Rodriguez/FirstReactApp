import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from "./Header";
import Footer from "./Footer";

class AppLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.container}>
                    <Text style={[styles.textColor, styles.fonts]}>Bienvenido { this.state.username }</Text>
                    <TextInput
                        placeholder="Personaliza tu usuario..."
                        onChangeText={ (username) => { this.setState({username})}}
                    />
                </View>
                <Footer />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A9F5F2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textColor: {
        color: 'white'
    },

    fonts: {
        fontWeight: 'bold',
    },
});

export default AppLayout;