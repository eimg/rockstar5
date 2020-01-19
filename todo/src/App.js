import React from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

class App extends React.Component {
    state = {
        items: []
    };

    input = React.createRef();
    autoid = this.state.items.length;
    api = "http://localhost:8000/tasks";

    componentDidMount() {
        fetch(this.api).then(res => res.json()).then(items => {
            this.setState({ items });
        });
    }

    add = () => {
        fetch(this.api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ subject: this.input.current.value })
        }).then(res => res.json()).then(item => {
            this.setState({
                items: [ ...this.state.items, item ]
            });
        });
    }

    remove = _id => {
        fetch(`${this.api}/${_id}`, { method: 'DELETE' });

        this.setState({
            items: this.state.items.filter(item => item._id !== _id)
        });
    }

    toggle = _id => {
        this.setState({
            items: this.state.items.map(item => {
                if(item._id === _id) {
                    item.status = +!item.status;

                    fetch(`${this.api}/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ status: item.status })
                    });
                }

                return item;
            })
        })
    }

    render() {
        return (
            <div>
                <h1>
                    React Todo
                    ({this.state.items.filter(item => {
                        return item.status === 0;
                    }).length})
                </h1>
                <TodoList
                    items={this.state.items.filter(i => i.status === 0)}
                    remove={this.remove}
                    toggle={this.toggle}
                />
                <DoneList
                    items={this.state.items.filter(i => i.status === 1)}
                    remove={this.remove}
                    toggle={this.toggle}
                />
                <div>
                    <input type="text" ref={this.input} />
                    <button onClick={this.add}>+</button>
                </div>
            </div>
        );
    }
}

export default App;
