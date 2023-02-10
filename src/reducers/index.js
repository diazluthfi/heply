import {combineReducers} from 'redux'
import AuthReducer from './auth'
import UserReducer from './user'
import ProfileReducer from './profile'

const rootReducer = combineReducers({
    UserReducer,
    ProfileReducer,
    AuthReducer
});

export default  rootReducer