import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


let doThis = "do your homework"
let theList = ["HW", "Grocery", "Clean"]


function App() {
  let toDo = theList.map((c, i) => {
    return <ListItem listItem={c} key={i} />
  })
  return (
        <div>
          <h1> Things i need to stop procrastinating </h1>
          <div>
            <ul>
              {toDo}
            </ul>
          </div>
        </div>
      )
    }


export default App;
