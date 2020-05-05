import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListStuff from './listStuff'

let doThis = ['dishes', 'sweeping', 'homework']

function App(props) {

  let parseList = doThis.map( (todo, index) => {
    return <listStuff listing = {todo} />
  })

  return (
    <div className="App">
      <div>

      <header className="App-header">
      <h1>Things I Should Stop Procrastinating: </h1>
        <div>
          {parseList}
        </div>
      </header>

      </div>
    </div>
  );
}

export default App;
