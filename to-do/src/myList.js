import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListStuff from './listStuff'

let doThis = ['dishes', 'sweeping', 'homework']

function App(props) {

  let parseList = doThis.map( (todo, index) => {
    return <ListStuff listing = {todo} key={index} />
  })

  return (
    <div className="App">
      <div>

      <header className="App-header">
      <h1>Things I Should Stop Procrastinating: </h1>
        <div>
          <ul>
            {parseList}
          </ul>
        </div>
      </header>

      </div>
    </div>
  );
}

export default App;
