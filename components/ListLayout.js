import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

class ListLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myMovies: [
                {name: "El conjuro", key: "0"},
                {name: "El conjuro 2", key: "1"},
                {name: "Anabelle", key: "2"},
            ]
        }
    }

    separator = () => {
        return(
            <View  style={
                styles.separatorList
            }/>
        )
    }

    render () {
        return (
            <FlatList
                data={this.state.myMovies}
                renderItem={({item}) => <Text>{item.name}</Text>}
                ItemSeparatorComponent={this.separator}
                ListEmptyComponent={<Text>No hay elementos por mostrar...</Text>}
            >
            </FlatList>
        );
    };
}

const styles = StyleSheet.create({
    separatorList: {
        height: 5,
        width: '100%',
        backgroundColor: 'black',
        marginVertical: 10
    }
});

export default ListLayout;