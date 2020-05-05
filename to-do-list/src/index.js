  
import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import * as serviceWorker from './serviceWorker';

let toBuy = ['Soda', 'Chips', 'Pizza']

ReactDOM.render(
  <React.StrictMode>
    <MyList toBuy={toBuy} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
