import React, { Component } from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component {

  render() {
    return (
      <div className="personal-info">
        <div className="personal-info-section">
          <div className="personal-info-photo" />
        </div>
        <div className="personal-info-section">
            <div className="personal-info-career">
              <span> Jonathan Obregón Alfaro </span>
            </div>
            <div className="personal-info-career animated bounceInDown">
              <span>Software developer</span>
            </div>
            <div className="personal-info-short-story animated bounceInDown">
              <p>Currently working at <a href="http://www.gorillalogic.com" target="_blank" rel="noopener noreferrer">Gorilla Logic</a></p>
            </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
