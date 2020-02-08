import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    appbar: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: "black",
        flexDirection: "row",
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
        flex: 1,
        marginLeft: 20,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        flexDirection: "row",
    },
    itemText: {
        fontSize: 20,
        flex: 1,
        marginLeft: 20
    },
    add: {
        flexDirection: "row",
    },
    input: {
        padding: 10,
        fontSize: 20,
        flex: 1,
        borderBottomWidth: 1,
    },
    done: {
        marginTop: 40,
        marginLeft: 20
    }
});

const Item = props => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                props.toggle(props.item._id);
            }}>
                {
                    props.item.status === 0
                    ? <Ionicons name="md-square-outline" size={32} />
                    : <Ionicons name="md-checkbox-outline" size={32} />
                }
            </TouchableOpacity>
            <Text style={styles.itemText}>{props.item.subject}</Text>
            <TouchableOpacity onPress={() => {
                props.remove(props.item._id)
            }}>
                <Ionicons name="md-trash" size={32} />
            </TouchableOpacity>
        </View>
    );
}

const api = "http://192.168.100.6:8000/tasks";

const App = props => {
    let [ items, setItem ] = useState([
        { _id: "1", subject: 'Milk', status: 0 },
        { _id: "2", subject: 'Egg', status: 1 },
        { _id: "3", subject: 'Bread', status: 0 },
    ]);

    let [ input, setInput ] = useState('');

    useEffect(() => {
        fetch(api).then(res => res.json()).then(json => {
            setItem(json);
        });
    }, []);

    const add = () => {
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ subject: input })
        }).then(res => res.json()).then(json => {
            setItem([ ...items, json ]);
            setInput('');
        });
    };

    const remove = _id => {
        fetch(`${api}/${_id}`, { method: "DELETE" });
        setItem(items.filter(item => item._id !== _id));
    }

    const toggle = _id => {
        setItem(items.map(item => {
            if(item._id === _id) {
                item.status = +!item.status
            }

            fetch(`${api}/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: item.status })
            });

            return item;
        }));
    }

    const clear = () => {
        fetch(api, { method: "DELETE" });
        setItem(items.filter(item => item.status === 0));
    }

    return (
        <View>
            <View style={styles.appbar}>
                <Ionicons name="md-list" size={32} color="white" />
                <Text style={styles.title}>Todo Native</Text>
                <TouchableOpacity onPress={clear}>
                    <Text style={{color: "white"}}>CLEAR</Text>
                </TouchableOpacity>
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
                    data={items.filter(item => item.status === 0)}
                    renderItem={({ item }) => {
                        return (
                            <Item
                                remove={remove}
                                toggle={toggle}
                                item={item}
                            />
                        )
                    }}
                    keyExtractor={item => item._id}
                />

                <View style={styles.done}><Text>DONE</Text></View>
                <FlatList
                    data={items.filter(item => item.status === 1)}
                    renderItem={({ item }) => {
                        return (
                            <Item
                                remove={remove}
                                toggle={toggle}
                                item={item}
                            />
                        )
                    }}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    );
}

export default App;
