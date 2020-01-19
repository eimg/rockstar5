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
                <TodoList />
                <DoneList />
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
        count: state.filter(item => item.status === 0).length,
    };
}, dispatch => {
    return {
        add: subject => dispatch({ type: 'ADD', subject }),
        clear: () => dispatch({ type: 'CLEAR' }),
    }
})(App);

export default ReduxApp;
