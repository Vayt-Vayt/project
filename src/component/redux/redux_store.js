import { combineReducers, legacy_createStore as createStore } from 'redux'
import messagePageReducer from "./reducer_messagePage";
import sadebarReducer from "./reducer_sadebar";
import profilePageReducer from './reducer_profilePage'
import  reducerUsers from './reducer_Users'

const reducers = combineReducers({
    profilePageReducer,
    messagePageReducer ,
    sadebarReducer,
    usersPage: reducerUsers,
});

const store = createStore(reducers);


export default store;