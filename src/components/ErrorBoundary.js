import React, { Component } from 'react';

//Extra safety in production, catch errors
class ErrorBoundary extends Component {
	//Have props parameter to allow access to this.props (tho end up not needing here)
	constructor(props){
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch (error, info) {
		this.setState ({ hasError: true })
	}

	render(){
		if (this.state.hasError) {
			return <h1> There is a problem </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;