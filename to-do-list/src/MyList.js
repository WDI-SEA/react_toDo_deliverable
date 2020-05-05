import React from 'react';
import './App.css';
import ListItem from './ListItem'

let toDo = ['Do your homework', 'Check LinkedIn', 'Review your resume', 'Fold your laundry', 'Pack your lunch']

function App(props) {
  let formattedList = toDo.map((c, i) => {
    return <ListItem listItem={c} key={i} />
  })
  return (
    <div className="App">
      <header>My List</header>
        <div>
          <ul>
            {formattedList}
          </ul>
        </div>
    </div>
  );
}

export default App;
