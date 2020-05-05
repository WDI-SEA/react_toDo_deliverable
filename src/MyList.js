import React from 'react';
import './App.css';
import ListItem from './ListItem'

function MyList() {
  let doThis = "Get groceries from TJ"
  return (
    <div className="App">
      <div>
      <header>My List </header>
      <div>
        <h1>Things I should stop procrastinating</h1>
        <ul>
        <ListItem listitem={doThis}/>
        </ul>
      </div>
    </div>
      
    </div>
  );
}

export default MyList;
