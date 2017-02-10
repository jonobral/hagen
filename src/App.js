import React, { Component } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-name">{'Jonathan Obregón Alfaro'}</div>
        </div>
        <PersonalInfo />
      </div>
    );
  }
}

export default App;
