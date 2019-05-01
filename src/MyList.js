import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


class MyList extends Component {
  render() {
    let items = this.props.todoItems.map((item, i) => <ListItem doThis={item} key={"toDo"+i}/>)

    return(
      <div>
        <h1>Things I should start procrastinating:</h1>
          <ul>
            {items}

          </ul>
      </div>
    )
  }
}

export default MyList;
