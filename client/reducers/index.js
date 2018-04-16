import { combineReducers } from 'redux';
import usersReducer from './userReducer';

export default combineReducers({
	userList: usersReducer
});