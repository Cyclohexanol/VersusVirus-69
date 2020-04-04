import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return(
      <div>
        <h2 className="is-size-3">Login</h2>
        <Link
          className="button"
          to={"signup"}>
          Register
        </Link>
      </div>
    )
  }
}

export default Login;
