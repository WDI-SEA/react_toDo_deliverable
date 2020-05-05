import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


function MyList(props) {
let list = props.todo.map((item, key) => {
	return(
		<ListItem key={key} item={item} />
	)
})
return (
    <div>
      <header>My List</header>
      <div>
        <ul>
          {list}    
        </ul>
      </div>
    </div>
  )
}

export default MyList;
