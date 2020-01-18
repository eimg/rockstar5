import React from "react";
import Item from "./Item";
import List from '@material-ui/core/List';

const styles = {
    done: {
        color: 'gray',
        textDecoration: 'line-through',
    }
};

const DoneList = ({ items, remove, toggle }) => (
    <List style={styles.done}>
        {items.map(item => {
            return (
                <Item
                    key={item._id}
                    item={item}
                    remove={remove}
                    toggle={toggle}
                />
            )
        })}
    </List>
);

export default DoneList;
