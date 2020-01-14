import React from 'react';
import './App.css';
import ListItem from './ListItem'

const MyList = props => {
  let theList = props.items.map((l, i) => {
    return <ListItem doThis={l} key={i} />
  })
  return (
    <div className="App">
      <header className="App-header">
        <h3>My List</h3>        
      </header>
      <div class="main">
        <ul>
        {theList}
        </ul>
      </div>
    </div>
  );
}

export default MyList;
