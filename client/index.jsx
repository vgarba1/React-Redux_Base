import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './posts.jsx';
import { Provider } from 'react-redux';
import store from './store.js'

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<Provider store={store}>
				<div>
					<div>Welcome to my Posts</div>
					<Posts/>
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));