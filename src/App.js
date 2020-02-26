import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                  Edit <code>src/App.js</code> and save to reload.
<p>my first app</p>        
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
    </div>
  );
}

export default App;


class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "Kate" }), document.getElementById('hello-example'));