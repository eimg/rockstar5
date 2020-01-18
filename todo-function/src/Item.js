import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ item, remove, toggle }) => (
    <ListItem>
        <ListItemIcon>
            <Checkbox
                checked={item.status}
                onChange={toggle(item._id)}
            />
        </ListItemIcon>
        <ListItemText primary={item.subject} />
        <ListItemSecondaryAction>
            <IconButton>
                <DeleteIcon onClick={remove(item._id)} />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
);

export default Item;
