import React from 'react';

class ListItem extends React.Component {
    render() {
        return ( 
            <li><input type="checkbox"></input>{this.props.doThis}</li>
        )
    }
}

export default ListItem;