import {applyMiddleware,combineReducers, createStore} from 'redux'
import AppReducer from './reducers/AppReducer';
import thunk from "redux-thunk";


const reducers = combineReducers({
    menu: AppReducer,
});

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;
