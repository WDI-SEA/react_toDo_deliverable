import React from 'react';
import './App.css';
import ListItem from './ListItem'
import { render } from '@testing-library/react';

class MyList extends React.Component {
  render() {
    let itemList = this.props.items.map((item, i) => (
      <ListItem doThis={item} key={i}/>
    ))

  return (
    <div className="MyList">
      <header className="MyList-header">
        My List
      </header>
      <div>
        <main>
            <ul>
              <li>{itemList}</li>
            </ul>
        </main>
      </div>
    </div>
  );
}
}

export default MyList;


// function MyList() {
//   return (
//     <div className="MyList">
//     <header className="MyList-header">
//       Things I Should Stop Procrastinating
//     </header>
//       <div>
//         <ul>
//           <ListItem doThis="Make the list"/>
//         </ul>
//       </div>
//     </div>
//   )
// }