import React, { Component } from 'react';
import './PersonalInfo.css';

class PersonalInfo extends Component {

  render() {
    return (
      <div className="personal-info">
        <div className="personal-info-section">
          <div className="personal-info-photo" />
        </div>
        <button onClick={this.handleClick} />
        <div className="personal-info-section">
            <div className="personal-info-career">
              {'Software developer'}
            </div>
            <div className="personal-info-short-story">
							{'Currently working at '}<a href="http://www.gorillalogic.com" target="_blank">{'Gorilla Logic'}</a>
            </div>
            <div className="personal-info-contact">
							{'LinkedIn - Github - Email'}
            </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
