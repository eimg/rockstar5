import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var autoid = 0;
var store = createStore(function(state = [], action) {
    switch(action.type) {
        case "ADD":
            return [
                ...state,
                { _id: ++autoid, subject: action.subject, status: 0 }
            ];
        case "DELETE":
            return state.filter(item => item._id !== action._id);
        case "TOGGLE":
            return state.map(item => {
                if(item._id === action._id) item.status = +!item.status;
                return item;
            });
        case "CLEAR":
            return state.filter(item => item.status === 0);
        default:
            return state;
    }
});

store.dispatch({ type: "ADD", subject: "Egg" });
store.dispatch({ type: "ADD", subject: "Milk" });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
