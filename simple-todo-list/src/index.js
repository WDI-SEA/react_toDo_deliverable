import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './myList';
import * as serviceWorker from './serviceWorker';

let theList = [
    "Laundry",
    "Grocery shopping",
    "Cook dinner",
    "Do homework",
    "Chill"
]

ReactDOM.render(< MyList theList={theList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
