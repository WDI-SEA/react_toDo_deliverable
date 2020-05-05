import React from 'react';
import './App.css';
import ListItem from './listItems'

let phrase = "Things I should stop procrastinating"
let toDos = ['project revamp', 'study', 'hw', 'sleep']

function MyList() {
let objectives = toDos.map((t, i) => {
  return <ListItem text={t} key={i} />
})
   return (
    <div>
      <h1>
        { phrase }
      </h1>
      <div>
        <ul>
          { objectives } 
        </ul>
      </div>
    </div>
  );
}

export default MyList;