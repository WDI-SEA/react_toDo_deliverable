import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MyList';
import * as serviceWorker from './serviceWorker';

let theList = ["Buy ice cream 🍦", "Eat ice cream 👅", "Go to the gym 🏋🏽‍♂️"]

ReactDOM.render(<App
    theList={theList}
    />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
