import React from "react";
import Item from "./Item";

const styles = {
    done: {
        color: 'gray',
        textDecoration: 'line-through',
    }
};

class DoneList extends React.Component {
    render() {
        return (
            <ul style={styles.done}>
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

export default DoneList;
