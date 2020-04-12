import React, { Component } from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component {

  render() {
    return (
      <div className="personal-info">
        <div className="personal-info-section photo">
          <div className="personal-info-photo">
            Hello!
          </div>
        </div>
        <div className="personal-info-section">
            <div className="personal-info-fullname">
              <span>Jonathan Obregón Alfaro</span>
            </div>
            <div className="personal-info-career animated bounceInDown">
              <span>Software Developer</span>
            </div>
            <div className="personal-info-short-story animated bounceInDown">
              <span>Lives in Costa Rica</span>
            </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
