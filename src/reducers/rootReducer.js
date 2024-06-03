import { createStore, combineReducers } from 'redux';
import noteReducer from './noteReducer';

let reducers = combineReducers({
    app: noteReducer
});

let store = createStore(reducers);


export default store;



