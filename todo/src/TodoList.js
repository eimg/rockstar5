import React from "react";
import Item from "./Item";

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => {
                    return (
                        <Item
                            key={item._id}
                            item={item}
                            remove={this.props.remove}
                            toggle={this.props.toggle}
                        />
                    )
                })}
            </ul>
        );
    }
}

export default TodoList;
