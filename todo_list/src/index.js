import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mylist from './Mylist';
import * as serviceWorker from './serviceWorker';

let todoItems = ['Buy icecream','Eat icecream', 'Go to the gym']

ReactDOM.render(<Mylist todoItems={todoItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
