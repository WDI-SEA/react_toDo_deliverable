import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  render () {
    let toDoItems = this.props.theList.map( (l, i) => {
      return <ListItem doThis={l} key={i} />
    })
    return (
      <div>
        <header>My List</header>
        <div>
          <ul>Things I should stop procrastinating:
            {toDoItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyList;
