var redux = require('redux');
var autoid = 0;
var store = redux.createStore(function(state = [], action) {
    switch(action.type) {
        case 'ADD':
            return [
                ...state,
                { _id: ++autoid, name: action.name }
            ];
        case 'DEL':
            return state.filter(n => n._id !== action._id);
        default:
            return state;
    }
});

store.subscribe(function() {
    console.log(store.getState());
});

store.dispatch({ type: 'ADD', name: 'Tom' });
store.dispatch({ type: 'ADD', name: 'Mary' });
store.dispatch({ type: 'ADD', name: 'James' });
store.dispatch({ type: 'DEL', _id: 2 });
