import React from 'react';

const Item = (props) => (
    <li>{props.name}</li>
);

const App = () => {
    return (
        <ul>
            <Item name="Apple" />
            <Item name="Orange" />
            <Item name="Mango" />
        </ul>
    );
};

export default App;
