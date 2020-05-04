import React from 'react';
import './App.css';
import ListItem from './ListItem';

class App extends React.Component {
  render() {
    let toDoItems = this.props.theList.map( (item, index) => {
      return  <ListItem doThis={item} key={index}/>;
    })

    return (
      <div>
        <h1><strong><header>Things I should stop procrastinating:</header></strong></h1>
        <hr/>
        <div>
          <ul>
            <h3><strong>{toDoItems}</strong></h3>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
