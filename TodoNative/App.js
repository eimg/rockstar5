import React, { useState } from 'react';
import {
    StyleSheet, Text, View, FlatList, TextInput, Button
} from 'react-native';

const styles = StyleSheet.create({
    appbar: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: "black",
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    itemText: {
        fontSize: 20
    },
    add: {
        flexDirection: "row",
    },
    input: {
        padding: 10,
        fontSize: 20,
        flex: 1,
        borderBottomWidth: 1,
    }
});

const Item = props => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.item.subject}</Text>
        </View>
    );
}

const App = props => {
    let [ items, setItem ] = useState([
        { _id: "1", subject: 'Milk', status: 0 },
        { _id: "2", subject: 'Egg', status: 1 },
        { _id: "3", subject: 'Bread', status: 0 },
    ]);

    let [ input, setInput ] = useState('');
    const add = () => {
        setItem([ ...items, { _id: "4", subject: input, status: 0 } ]);
        setInput('');
    };

    return (
        <View>
            <View style={styles.appbar}>
                <Text style={styles.title}>Todo Native</Text>
            </View>
            <View style={styles.add}>
                <TextInput
                    onChangeText={text => setInput(text)}
                    value={input}
                    style={styles.input} />
                <Button
                    onPress={add}
                    title="ADD" />
            </View>
            <View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    );
}

export default App;
