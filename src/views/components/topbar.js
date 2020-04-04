import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
    };
  }

  render() {
    return (
      <div className="top-bar no-shrink">
        <p>69</p>
        <button className="button" onClick={()=>{this.props.logout()}}>Log Out</button>
      </div>
    );
  }
}

export default TopBar;
