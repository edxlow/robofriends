import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		//Fetch users from this server
		fetch('https://jsonplaceholder.typicode.com/users')
			//Get the response
			.then(response => response.json())
			//Get the users and updating users at setState
			.then(users => this.setState({robots:users}));
	}

	//Arrow Function Cause its not in React
	onSearchChange = (event) => {
		//Read the value on searchfield and update the state
		this.setState({searchfield: event.target.value})
	}

	render(){
		//filter the robots (states) according to searchfield
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		//If Statement for if fetching is long to load for UX
		if (!this.state.robots.length){
			return <h1> Loading </h1>
		} 
		else {
			return (
			<div className = 'tc'>
				<h1 className = 'f-subheadline'>RoboFriends</h1>
				<SearchBox searchChange= {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			)
		}
	}
}

export default App;