import React , {Component} from 'react';
import ListItem from './ListItem'
import App from './App.css'

class Mylist extends Component {
  render(){
    let items = this.props.todoItems.map((c, i) => {
      return <ListItem content={c} key={i} />
    })

  return (
    <div className="App-header">
      <header><h1>Things I should stop procrastinating</h1></header>
      <div>
        <ul>
          {items}
        </ul>
      </div>
    </div>
   );
  }
}

export default Mylist;
