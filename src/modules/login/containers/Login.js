import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from "native-base";
import {StyleSheet} from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import {Notifications} from "expo";

class Login extends Component {
    state = {
        expoPushToken: '',
        notification: {},
    };

    async componentDidMount() {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
            this.setState({ expoPushToken: token });
        } else {
            alert('Must use physical device for Push Notifications');
        }
    }
    register = () => {
        this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={ styles.content }>
                    <Card>
                        <CardItem header bordered>
                            <Text style={ styles.textCenter }>LOGIN</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={ styles.body }>
                                <Item inlineLabel>
                                    <FontAwesome name='user'  size={20} />
                                    <Input placeholder='Username...' />
                                </Item>
                                <Item inlineLabel last>
                                    <Ionicons name="ios-lock" size={20} />
                                    <Input secureTextEntry={true} placeholder='Password...' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button success onPress={ this.register }>
                                <Text> Registrarme </Text>
                            </Button>
                            <Button primary style={ styles.button }>
                                <Text> Ingresar </Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center'
    },

    textCenter: {
        textAlign: 'center',
        width: '100%'
    },

    button: {
        marginLeft: '35%'
    },

    body: {
        paddingVertical: 20
    }
})

export default Login;