import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Signup extends Component {

  render() {
    return(
      <Fragment>
        <div className="top-bar">
          <div>
            VersusVirus 69
          </div>
          <Link
            className="button"
            to={"login"}>
            Sign In
          </Link>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
    				<p>
            	This is a demo app. Account creation is deactivated.
    				</p>
    				<p>
    					Please use the following dummy accounts to view the demo.
    				</p>

    				<h3 className="is-size-4">Buyer</h3>
    				<p>
    				Username: buy
    				</p>
    				<p>
    				Password: help
    				</p>

    				<h3 className="is-size-4">Shop owner</h3>
    				<p>
    				Username: owner
    				</p>
    				<p>
    				Password: help
    				</p>

    				<h3 className="is-size-4">Volunteer</h3>
    				<p>
    				Username: volunteer
    				</p>
    				<p>
    				Password: help
    				</p>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Signup;
