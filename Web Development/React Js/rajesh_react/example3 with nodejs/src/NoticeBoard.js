import React from 'react';
import CardList from './CardList';

class NoticeBoard extends React.Component {
	 render() {
		 var cards = this.props.cards;
        return (
			<div className="content">
				<div className="task-header">To Do
					<CardList card={cards[1]} />
				</div>
				<div className="task-header">In Progress
					<CardList card={cards[0]} />
				</div>
				<div className="task-header">Done</div>
            </div>
        )  
	 }
}
export default NoticeBoard;