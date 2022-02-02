import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello there',
      data: [
        /* {
          name: 'Alexa',
          id: 0,
        },
        {
          name: 'Siri',
          id: 1,
        },
        {
          name: 'Cortana',
          id: 2,
        }, */
      ],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.data.map((el) => {
            return <div key={el.id}>{el.name}</div>;
          })}
          <p>{this.state.string}</p>
          <button
            onClick={() => {
              this.setState({ string: 'Hello Meee' });
            }}
          >
            Change
          </button>
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
}

// function App() { return (<></>)}

export default App;
