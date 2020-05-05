import React from 'react';
import logo from './wheel.png';
import './App.css';
import ListItem from './ListItem'

function MyList(props) {
  let toDoItems = props.theList.map((d) => {
    return <ListItem doThis={d} />
  })
  return (
    <div className="App">
      <header className="App-header">
      <h2>My To-Do List</h2>
      
      <div class="carBody">
        <div class="carTop"></div>
          <div class="carBottom">
            <div class="headlight"></div>
            <img class="fire" src="http://www.clipartbest.com/cliparts/niE/yAR/niEyARbrT.png" alt="flames"></img>
            <div class="heady">
            <img src={logo} className="App-logo" alt="logo" />
            <div></div>
            <img src={logo} className="App-logo" alt="logo" />
            <div class="backlight"></div>
          </div>
        </div>
      </div>
    
      </header>
      <div class="boxyBox">
        <div class="listBox">
          <ul>
            {toDoItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyList;
