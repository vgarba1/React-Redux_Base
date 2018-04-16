import { FETCH_USERS, NEW_USER } from '../actions/types.js';

const initialState = {
	users: [],
	newUser: {}
};

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_USERS: 
			let returnObj = { 
				...state,
				users: action.payload
			}
			return returnObj;
		default: 
			return state;
	}
}