import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import messagePageReducer from "./reducer_messagePage";
import sadebarReducer from "./reducer_sadebar";
import profilePageReducer from './reducer_profilePage'
import  reducerUsers from './reducer_Users'
import authReducer from './auth_reducer';
import  thunlMiddleweare from 'redux-thunk';
import { reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    profilePageReducer,
    messagePageReducer ,
    sadebarReducer,
    usersPage: reducerUsers,
    auth: authReducer,
    form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunlMiddleweare));


export default store;