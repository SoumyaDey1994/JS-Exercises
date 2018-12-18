import React from 'react';
import ListItem from './ListItem';

class CardList extends React.Component {
	render() {
		var card = this.props.card;
		return (
			<div className="list-details">
				<div className="list-title">{card.title}</div>
				<p>{this.props.card.description}</p>
				<ul>
				{
					card.tasks.map(function(listitem, i) {
					return (
						<ListItem listitem={listitem} key={i} />
					);
				})}
				</ul>
			</div>
		)  
	}
}
export default CardList;