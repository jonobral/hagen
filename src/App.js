import React, { Component } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import ContactInfo from './components/ContactInfo/ContactInfo'
import JobsHistory from './components/JobsHistory/JobsHistory'

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="section parallax app-personal bg1">
          <PersonalInfo />
        </section>
        <section className="section app-contact static">
          <ContactInfo />
        </section>
        <section className="section parallax app-projects bg2">
          <JobsHistory />
        </section>
      </div>
    );
  }
}

export default App;
