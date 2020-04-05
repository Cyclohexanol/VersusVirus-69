import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return(
      <Fragment>
        <div className="top-bar">
          <figure class="image">
            <img class="is-bar-logo" src="TakeEatEasy_logo_blackwhite_horiz@2x.png"/>
          </figure>
          <Link
            className="button"
            to={"login"}>
            Sign In
          </Link>
        </div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                What is Project 69
              </h1>
              <h2 className="subtitle">
                Swag text
              </h2>
            </div>
          </div>
        </section>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                How does it work?
              </h1>
              <h2 className="subtitle">
                More swag text
              </h2>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Home;
