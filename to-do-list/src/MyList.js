  
import React from 'react';
import ListItem from './ListItem'



function MyList(props) {
let things = props.toBuy.map((c, i) => {
  return <ListItem text={c} key={i} />
})
   return (
    <div>
      <h1>
      Things to buy:
      </h1>
      <div>
        <ul>
          { things } 
        </ul>
      </div>
    </div>
  );
}

export default MyList;