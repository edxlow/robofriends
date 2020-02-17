import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	//Can directly put this function into div too since its javascript
	const cardComponent = robots.map ((user,i) => {
		return (
		<Card 
		key={robots[i].id} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		/>
		);
	})
	return (
		<div>
			{cardComponent};
		</div>
	);
}

export default CardList;