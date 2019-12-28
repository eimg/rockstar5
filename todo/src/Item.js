import React from "react";

class Item extends React.Component {
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.item.status}
                    onChange={() => {
                        this.props.toggle(this.props.item._id)
                    }}
                />
                {this.props.item.subject}
                <a href="#/" onClick={() => {
                    this.props.remove(this.props.item._id)
                }}>&times;</a>
            </li>
        );
    }
}

export default Item;
