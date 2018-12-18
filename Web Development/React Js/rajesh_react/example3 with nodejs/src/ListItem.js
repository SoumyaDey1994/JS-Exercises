import React from 'react';

class ListItem extends React.Component {
	render(){
        var listitem = this.props.listitem;

        return(
            <li key={listitem.name}>
				<input type="checkbox" defaultChecked={listitem.done} />{listitem.name}
			</li>
        );
    }
}
export default ListItem;