import React from 'react';
import './App.css';
import ListItem from './ListItem'

function MyList(props) {
  let todoItems= props.theList.map((li,i)=>{
    return  <ListItem listitem={li} key={i}/>
  })

  return (
    <div className="App">
      <div>
      <header>My List </header>
      <div>
        <h1>Things I should stop procrastinating</h1>

        <ul>
        <ListItem listitem={props.theList[0]}/>
       
        <ListItem listitem={props.theList[1]}/>
       
        <ListItem listitem={props.theList[2]}/>
        </ul>
        <hr/>

        <h1>Things I should stop procrastinating</h1>
        <ul> {todoItems} </ul>

      </div>
    </div>
      
    </div>
  );
}

export default MyList;
