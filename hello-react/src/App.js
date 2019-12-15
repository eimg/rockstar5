import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.item.name}
                <a href='#/' onClick={() => {
                    this.props.remove(this.props.item._id)
                }}>&times;</a>
            </li>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { '_id': 1, 'name': 'Alice' },
                { '_id': 2, 'name': 'Bob' },
            ]
        }

        this.autoid = this.state.data.length;

        this.input = React.createRef();
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add() {
        var data = this.state.data;
        var name = this.input.current.value;
        data.push({ '_id': ++this.autoid, 'name': name });
        this.setState({
            data: data
        });
    }

    remove(_id) {
        var data = this.state.data.filter(item => item._id !== _id);
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <ul>
                    {this.state.data.map((item) => (
                        <Item
                            item={item}
                            key={item._id}
                            remove={this.remove} />
                    ))}
                </ul>
                <input type="text" ref={this.input} />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default App;
