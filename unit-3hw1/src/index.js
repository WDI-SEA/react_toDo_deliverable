import React from 'react';
import './App.css';
import ListItem from './ListItem'
import App from './App'
import * as serviceWorker from './serviceWorker'

let list = ['working out','eating', 'studying', 'gaming', 'studying moreeee' ]



ReactDOM.render(
  <React.StrictMode>
    <MyList />
  </React.StrictMode>,
  document.getElementById('root')
);