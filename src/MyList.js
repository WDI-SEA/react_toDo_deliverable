import React from 'react';
import './App.css';
import logo from './todo.png';
import ListItem from './ListItem'

function MyList(props) {
  let todoItems= props.theList.map((li,i)=>{
    return  <ListItem listitem={li} key={i}/>
  })

  return (
    <div className="App">
      <div>
      <header class="App-header">
        My Todo List 
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <hr/>
      <div >
        <h1 >Things I should stop procrastinating:</h1>
        <hr/>
         <section>
        <ul> {todoItems} </ul>
        </section>
       
       

      </div>
    </div>
      
    </div>
  );
}

export default MyList;
