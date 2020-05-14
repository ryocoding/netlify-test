import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Top() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <Link to="/works">works</Link>
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
  );
}

function Work() {
  return (
    <div>this is work page
      <Link to="/">top</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Top}/>
          <Route path='/works' component={Work}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
