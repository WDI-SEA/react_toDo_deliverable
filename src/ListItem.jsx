import React from 'react';
import './ListItem.css';

const ListItem=(props)=>{
    return(
       <li> {props.listitem}  </li>
    )
}

export default ListItem;