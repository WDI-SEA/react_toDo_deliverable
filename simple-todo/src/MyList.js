import React from 'react';
import './App.css';
import ListItem from './ListItem'

function MyList(props) {
  let todoItems = props.theList.map((item, i) => {
    return <ListItem doThis = {item} key = {i}/>
  })
  
  return (
    <div className="MyList">
      <header className="List-header">
        <h1>Things I should stop procrastinating</h1>
      </header>
      <div className="List-content">
        <ul>
          {/* <ListItem doThis = {props.theList}/> */}
         {todoItems}
        </ul>
      </div>
    </div>
  );
}

export default MyList;
