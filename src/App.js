import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Madondo</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form>
              <input type="text" name="username" placeholder="Jina lako nani?" />
              <input type="text" name="currentItem" placeholder="Waleta mapishi yapi?" />
              <button>Ongeza mapishi</button>
            </form>
          </section>
          <section className="displayItem">
            <div className="wrapper">
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
