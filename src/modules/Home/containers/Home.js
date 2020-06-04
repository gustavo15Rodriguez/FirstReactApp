import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
import {StyleSheet} from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import {Notifications} from "expo";
import Location from "../components/Location";

class Home extends Component {
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

    logout = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={ styles.content }>
                    <Card>
                        <CardItem header bordered>
                            <Text style={ styles.textCenter }>HOME</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={ styles.body }>
                                <Location />
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button dark onPress={ this.logout } style={ styles.button }>
                                <Text> Salir </Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    textCenter: {
        textAlign: 'center',
        width: '100%'
    },

    button: {
        marginLeft: '80%'
    },

    body: {
        paddingVertical: 20
    }
})

export default Home;