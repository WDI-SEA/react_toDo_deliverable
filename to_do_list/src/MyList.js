import React from 'react';
import './App.css';
import ListItem from './ListItem'

function MyList () {
  return (
    <div className="App">
      <header className="App-header">
        <h3>My List</h3>        
      </header>
      <div class="main">
        <ul>
        <ListItem />
        </ul>
      </div>
    </div>
  );
}

export default MyList;
