import React from 'react';
import { AppLoading } from 'expo';
import {
    Container,
    Text,
    Header,
    Title,
    Left,
    Right,
    Body,
    Button,
    Icon,
    List,
    ListItem,
    Separator,
    Item,
    Input,
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {
    state = {
        isReady: false,
        items: [
            { _id: '1', subject: 'Native Base', status: 0 },
            { _id: '2', subject: 'Elements', status: 0 },
            { _id: '3', subject: 'RNDS', status: 1 },
        ],
        input: ''
    };

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font
        });
        this.setState({isReady: true});
    }

    add = () => {
        this.setState({
            items: [
                ...this.state.items,
                { _id: '4', subject: this.state.input, status: 0 }
            ],

            input: ''
        });
    }

    remove = _id => {
        this.setState({
            items: this.state.items.filter(i => i._id !== _id)
        });
    }

    toggle = _id => {
        this.setState({
            items: this.state.items.map(i => {
                if(i._id === _id) i.status = +!i.status;
                return i;
            })
        })
    }

    clear = () => {
        this.setState({
            items: this.state.items.filter(i => i.status === 0)
        })
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <Container style={{backgroundColor: '#ffffdd'}}>
                <Header transparent>
                    <Left>
                        <Icon name="md-list" />
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>Base Todo</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.clear}>
                            <Text style={{color: 'black'}}>CLEAR</Text>
                        </Button>
                    </Right>
                </Header>

                <Item regular>
                    <Input
                        onChangeText={(input) => this.setState({ input })}
                        value={this.state.input}
                        placeholder="New Task" />
                    <Button transparent onPress={this.add}>
                        <Icon name="add" />
                    </Button>
                </Item>

                <List>
                    <ListItem itemDivider>
                        <Text>TODO</Text>
                    </ListItem>
                    {this.state.items.filter(i => i.status === 0).map(item => {
                        return (
                            <ListItem key={item._id} icon>
                                <Left>
                                    <Icon name="square-outline" onPress={() => {
                                        this.toggle(item._id);
                                    }} />
                                </Left>
                                <Body>
                                    <Text>{item.subject}</Text>
                                </Body>
                                <Right>
                                    <Icon name="trash" onPress={() => {
                                        this.remove(item._id);
                                    }} />
                                </Right>
                            </ListItem>
                        )
                    })}
                </List>
                <List>
                    <ListItem itemDivider>
                        <Text>DONE</Text>
                    </ListItem>
                    {this.state.items.filter(i => i.status === 1).map(item => {
                        return (
                            <ListItem key={item._id} icon>
                                <Left>
                                    <Icon name="checkbox" onPress={() => {
                                        this.toggle(item._id);
                                    }} />
                                </Left>
                                <Body>
                                    <Text>{item.subject}</Text>
                                </Body>
                                <Right>
                                    <Icon name="trash" onPress={() => {
                                        this.remove(item._id);
                                    }} />
                                </Right>
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
        );
    }
}

export default App;
