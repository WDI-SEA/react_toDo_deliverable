import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MyList';
import * as serviceWorker from './serviceWorker';

let theList = ['pick up dry cleaning', 'finish homework', 'buy groceries', 'mail out Amazon returns', '']
let nextWeek = ['Return shoes at Adidas', 'Pick up dog food', 'Pay cable bill', 'Replant Fig tree']

ReactDOM.render(
  <React.StrictMode>
    <App theList = {theList} nextWeek = {nextWeek}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
