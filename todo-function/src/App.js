import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ListIcon from '@material-ui/icons/List';

const styles = {
    title: {
        marginLeft: 20,
    }
}

const App = props => {
    let input = React.createRef();

    let add = () => {
        props.add(input.current.value)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Badge badgeContent={props.count} color="secondary">
                        <ListIcon />
                    </Badge>
                    <Typography variant="h6" style={styles.title}>
                        Todo List
                    </Typography>
                </Toolbar>
            </AppBar>

            <div>

                <TodoList
                    items={props.todo}
                    remove={props.remove}
                    toggle={props.toggle}
                />
                <DoneList
                    items={props.done}
                    remove={props.remove}
                    toggle={props.toggle}
                />
                <div>
                    <input type="text" ref={input} />
                    <button onClick={add}>+</button>

                    <a href="#/" onClick={props.clear}>Clear</a>
                </div>
            </div>
        </div>
    );
}

var ReduxApp = connect(state => {
    return {
        todo: state.filter(item => item.status === 0),
        done: state.filter(item => item.status === 1),
        count: state.filter(item => item.status === 0).length,
    };
}, dispatch => {
    return {
        add: subject => dispatch({ type: 'ADD', subject }),
        remove: _id => () => dispatch({ type: 'DELETE', _id }),
        toggle: _id => () => dispatch({ type: 'TOGGLE', _id }),
        clear: () => dispatch({ type: 'CLEAR' }),
    }
})(App);

export default ReduxApp;
