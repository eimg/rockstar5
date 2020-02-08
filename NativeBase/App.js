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
        ]
    };

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font
        });
        this.setState({isReady: true});
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
                        <Button transparent>
                            <Text style={{color: 'black'}}>CLEAR</Text>
                        </Button>
                    </Right>
                </Header>

                <Item regular>
                    <Input placeholder="New Task" />
                    <Button transparent>
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
                                    <Icon name="square-outline" />
                                </Left>
                                <Body>
                                    <Text>{item.subject}</Text>
                                </Body>
                                <Right>
                                    <Icon name="trash" />
                                </Right>
                            </ListItem>
                        )
                    })}
                </List>
                <List>
                    <ListItem itemDivider>
                        <Text>DONE</Text>
                    </ListItem>
                    {this.state.items.filter(i => i.status === 0).map(item => {
                        return (
                            <ListItem key={item._id} icon>
                                <Left>
                                    <Icon name="checkbox" />
                                </Left>
                                <Body>
                                    <Text>{item.subject}</Text>
                                </Body>
                                <Right>
                                    <Icon name="trash" />
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
