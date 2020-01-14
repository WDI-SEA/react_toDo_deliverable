import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

const MyList = (props) => {
  let todoItems = props.theList.map((item, i) => {
    return <ListItem doThis={item} key={i} />
  })
  
  return (
    <div>
      <h1>Things I Should stop procastinating</h1>
      <div>
        <ul>
          {todoItems} 
        </ul>
      </div>
    </div>
  )
}


export default MyList;
