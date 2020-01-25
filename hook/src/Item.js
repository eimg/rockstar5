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

export default Item;
