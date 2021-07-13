import  userReducer from './reducers/userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer
});