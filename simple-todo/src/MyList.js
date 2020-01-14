import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

const MyList = (props) => {
  let title = 'Things I should stop procrastinating:'
  let todoItems = props.theList.map( (item, i) => (
    <ListItem doThis={item} key={i} />
  ))

  return (
    <div className="container MyList">
      <header>
        <h1>{title}</h1>
      </header>
      <div>
        <ul>
          {todoItems}
        </ul>
      </div>
    </div>
  );
}

export default MyList;
