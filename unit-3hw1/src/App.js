import React from 'react';
import './App.css';
import ListItem from './ListItem'


const App = (props) => {
 let myList = props.list.map ((item, key) => {
   return (
     <ListItem key={key} item={item} />
   )
 })
 return (
    <div className="App">
      <h1>Things I need to Do:</h1>
    <ul>
      {myList}
    </ul>
    </div>
  );
}

export default App;