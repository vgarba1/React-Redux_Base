import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/userActions.js'; 


class Posts extends React.Component {

	componentWillMount(){
		this.props.fetchUsers();
	}

	render(){
		let posts = this.props.userList.map(each => (
			<div>
				<div>{each.first_name}</div>
				<div>{each.last_name}</div>
				<div>{each.avatar}</div>
			</div>
		))
		return(
			<div>
				{ posts }
			</div>
		)
	}
}

const mapStateToProps = state => ({
	userList: state.userList.users
})

export default connect(mapStateToProps, { fetchUsers })(Posts)