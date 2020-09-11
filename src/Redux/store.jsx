import {combineReducers, createStore} from 'redux'
import AppReducer from './reducers/AppReducer';

const reducers = combineReducers({
    menu: AppReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;