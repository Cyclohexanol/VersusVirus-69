import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Volunteer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      rangeKm: 10,
      maxLoad: 15
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (key, value) {
    this.setState(prevState => {
      prevState[key] = value
      return prevState
    })
  }

  render() {
    return (
      <Fragment>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container h-centered has-text-centered">
              <div>You currently have no pending deliveries.</div>
              <br/>
              <button className="button is-medium">Deliveries History</button>
            </div>
          </div>
        </section>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="title is-size-4">Find a person in need !</div>
              <div className="subtitle is-size-5">Enter your settings</div>
              <input class="input" type="text" placeholder="Text input"/>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Volunteer;
