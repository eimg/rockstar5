import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

class App extends React.Component {
    input = React.createRef();

    render() {
        return (
            <div>
                <h1>
                    React Todo
                    ({this.props.count})
                </h1>
                <TodoList
                    items={this.props.todo}
                    remove={this.props.remove}
                    toggle={this.props.toggle}
                />
                <DoneList
                    items={this.props.done}
                    remove={this.props.remove}
                    toggle={this.props.toggle}
                />
                <div>
                    <input type="text" ref={this.input} />
                    <button onClick={() => {
                        this.props.add(this.input.current.value);
                    }}>+</button>

                    <a href="#/" onClick={this.props.clear}>Clear</a>
                </div>
            </div>
        );
    }
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
        remove: _id => dispatch({ type: 'DELETE', _id }),
        toggle: _id => dispatch({ type: 'TOGGLE', _id }),
        clear: () => dispatch({ type: 'CLEAR' }),
    }
})(App);

export default ReduxApp;
