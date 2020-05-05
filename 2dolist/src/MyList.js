import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


function App(props) {
  let toDoItems = props.theList.map((l, i) => {
    return <ListItem text={l} key={i} />

  })
  let nextWeekIsh = props.nextWeek.map((d,c) => {
    return <ListItem text={d} key={c} />
  })
  return (
    <div className="App">
      <header class="App-header">
        <h1>My To-Do List</h1>
      </header>
      <div>
        {/* <ListItem doThis = {'buy milk'}/>  */}
        <div class="notepad">
            <h3>Today</h3>
          <div class="list">
            {toDoItems}
          </div>
        <div class="nextWeek">
          <div class="list">
            <h3>Next Week</h3>
            {nextWeekIsh}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
