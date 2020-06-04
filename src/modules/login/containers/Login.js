import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from "native-base";
import {StyleSheet} from "react-native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class Login extends Component {
    register = () => {
        this.props.navigation.navigate('Register');
    }

    home = () => {
        this.props.navigation.navigate('Home');
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
                            <Button primary onPress={ this.home } style={ styles.button }>
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