import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListStuff from './listStuff'



function App(props) {
  let parseList = props.doThis.map( (todo, index) => {
    return (<li> {todo}! </li>)
  })

  return (
    <div className="App">
      <div>

      <header className="App-header">
      <ListStuff />
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
