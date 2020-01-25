import React, { useState, useEffect, createRef } from "react";

const api = "http://localhost:8000/tasks";

const App = props => {

    let [ items, setItem ] = useState([]);
    let input = createRef();

    useEffect(() => {
        fetch(api).then(res => res.json()).then(json => {
            setItem(json);
        });
    }, []);

    let add = () => {
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ subject: input.current.value })
        }).then(res => res.json()).then(json => {
            setItem([ ...items, json ]);
        });
    }

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.subject}
                        <a href="#/" onClick={() => {
                            fetch(`${api}/${item._id}`, { method: 'DELETE' });
                            setItem(items.filter(i => i._id !== item._id));
                        }}>&times;</a>
                    </li>
                ))}
            </ul>
            <input type="text" ref={input} />
            <button onClick={add}>Add</button>
        </div>
    );
}

export default App;
