import React, { Component } from 'react';
import './JobsHistory.css';

class JobsHistory extends Component {

  render() {
    return (
      <div className="jobs-history">
        <div className="jobs-history-current">
          <p>Currently working at <a href="http://www.gorillalogic.com" target="_blank" rel="noopener noreferrer">Gorilla Logic</a></p>
        </div>
        <div className="jobs-history-previous">
          <span>Projects:</span>
          <p>NBC - Logo</p>
          <p>Ooluroo</p>
          <p>Gamevillage - Logo</p>
        </div>
      </div>
    );
  }
}

export default JobsHistory;
