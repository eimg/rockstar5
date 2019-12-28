import React from 'react';
import Item from './Item';

class App extends React.Component {
    state = {
        data: [
            { '_id': 1, 'name': 'Alice' },
            { '_id': 2, 'name': 'Bob' },
        ]
    };

    input = React.createRef();

    autoid = this.state.data.length;

    add = () => {
        var data = this.state.data;
        var name = this.input.current.value;
        data.push({ '_id': ++this.autoid, 'name': name });
        this.setState({
            data: data
        });
    }

    remove = _id => {
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
