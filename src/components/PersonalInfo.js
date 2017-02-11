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
            <div className="personal-info-career animated bounceInDown">
              {'Software developer'}
            </div>
            <div className="personal-info-short-story animated bounceInDown">
              <p>Currently working at <a href="http://www.gorillalogic.com" target="_blank">Gorilla Logic</a></p>
            </div>
            <div className="personal-info-contact">
              <p>LinkedIn</p>
              <p>Github</p>
              <p>jonobral@gmail.com</p>
            </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
