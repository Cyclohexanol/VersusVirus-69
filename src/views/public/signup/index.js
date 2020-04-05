import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Signup extends Component {

  render() {
    return(
      <Fragment>
        <div className="top-bar">
          <Link to={"/"}>
            <figure class="image">
              <img class="is-bar-logo" src="TakeEatEasy_logo_blackwhite_horiz@2x.png"/>
            </figure>
          </Link>
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
            <br/>
            <div className="card is-fullwidth is-primary-background">
              <div className="card-content">
        				<h3 className="is-size-4">Login as a consumer</h3>
        				<p>
        				    Username: buy
        				</p>
        				<p>
        				    Password: help
        				</p>
              </div>
            </div>
            <div className="card is-fullwidth">
              <div className="card-content">
        				<h3 className="is-size-4">Login as a volunteer</h3>
        				<p>
        				    Username: volunteer
        				</p>
        				<p>
        				    Password: help
        				</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Signup;
