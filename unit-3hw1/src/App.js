import React from 'react';
import Comment from './Comment'
import logo from './logo.svg';
import './App.css';
function App(props) {
  let formattedComments = props.post.comments.map((c, i) => {
    return <Comment text={c} key={i} />
  })
      return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.sam}
        </p>
        <p>
          {props.myClass.name}
        </p>
        <p>
          {props.myClass.capacity}
        </p>
        <p>
          {props.myClass.year}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>
          {props.post.title}
        </h1>
        <p>
          by {props.post.author}
        </p>
        <p>
          {props.post.body}
        </p>
        <strong>
          Comments:
        </strong>
        {formattedComments}
    </div>
  );
}
export default App;









