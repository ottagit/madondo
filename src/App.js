import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

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
              <input type="text" name="username" placeholder="Jina lako nani?" onChange={this.handleChange}
                value={this.state.username}
              />
              <input type="text" name="currentItem" placeholder="Waleta mapishi yapi?"
                onChange={this.handleChange} value={this.state.currentItem}
              />
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
