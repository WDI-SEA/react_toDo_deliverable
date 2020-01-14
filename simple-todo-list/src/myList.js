import React from 'react';
import './App.css';
import ListItem from './ListItem'

function MyList(props) {
  let todoItems = props.theList.map((t, i) => {
    return <ListItem text={t} key={i} />
  })
  return (
    <div className="App">
      <header><h2>My List</h2></header>
      <div>
        <ul>
          {todoItems} 
        </ul>
      </div>
    </div>
  );
}

export default MyList;
