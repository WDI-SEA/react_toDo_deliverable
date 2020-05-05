import React from 'react';
import './App.css';
import ListItem from './ListItem'

function App(props) {
let todoItems = props.theList.map((item, index) => {
  return <ListItem text={item} key={index} />
})
  return (
    <div className="App">
     <div className="container">
     <h1>Things I should stop procrastinating:</h1>
      <div className="tasks">
      <ul>
        {/* <ListItem doThis={"buy milk"} /> */}
        {todoItems}
      </ul>
      </div>
       </div> 
     
    </div>
  );
}

export default App;
