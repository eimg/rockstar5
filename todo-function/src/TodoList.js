import React from "react";
import Item from "./Item";
import List from '@material-ui/core/List';

const TodoList = ({ items, remove, toggle }) => (
    <List>
        {items.map(item => (
            <Item
                key={item._id}
                item={item}
                remove={remove}
                toggle={toggle}
            />
        ))}
    </List>
);

export default TodoList;
