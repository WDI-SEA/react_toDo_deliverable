import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const ListItem = (props) => {
  let item = props.doThis
//   let items = props.items

//   let todoItems = items.map( (item, i) => {
//     let newItem
//     return newItem = item + '!'
//   })

  return (
    <li>{item}</li>
  );
}

export default ListItem;
