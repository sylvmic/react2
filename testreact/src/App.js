import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/httpTrigger1')
      .then(response => response.text())
      .then(text => setData(text))
      .catch(error => console.error(error));
  }, []);

  const test = 'banane'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. ghkghj {data} {test}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data}
      </header>
    </div>
  );
}

export default App;
