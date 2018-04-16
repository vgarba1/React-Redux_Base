import { FETCH_USERS, NEW_USER } from './types.js';
import axios from 'axios';

export const fetchUsers = ( ) => dispatch => {
	console.log('hi')
	axios.get("https:\//reqres.in/api/users?page=2")
	.then(res => dispatch({
			type: FETCH_USERS,
			payload: res.data.data
		})
	)
	.catch((err) => {
		if(err) {
			throw err;
		}
	})
}