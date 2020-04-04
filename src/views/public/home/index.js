import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return(
      <div>
        Home
        <Link
          className="button"
          to={"login"}>
          Sign In
        </Link>
      </div>
    )
  }
}

export default Home;
