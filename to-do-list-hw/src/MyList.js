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
        <header>Things I should stop procrastinating:</header>
        <hr/>
        <div>
          <ul>
            {toDoItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
