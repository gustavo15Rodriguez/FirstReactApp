import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from "native-base";
import {StyleSheet} from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

class Register extends Component {
    login = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={ styles.content }>
                    <Card>
                        <CardItem header bordered>
                            <Text style={ styles.textCenter }>REGISTRO</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={ styles.body }>
                                <Item inlineLabel>
                                    <FontAwesome name='user'  size={20} />
                                    <Input placeholder='Names...' />
                                </Item>
                                <Item inlineLabel>
                                    <FontAwesome name='user'  size={20} />
                                    <Input placeholder='Username...' />
                                </Item>
                                <Item inlineLabel last>
                                    <MaterialCommunityIcons name="email" size={20} />
                                    <Input secureTextEntry={true} placeholder='Email...' />
                                </Item>
                                <Item inlineLabel last>
                                    <Ionicons name="ios-lock" size={20} />
                                    <Input secureTextEntry={true} placeholder='Password...' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button dark onPress={ this.login }>
                                <Text> Cancelar </Text>
                            </Button>
                            <Button info  style={ styles.button }>
                                <Text> Registrarme </Text>
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

export default Register;