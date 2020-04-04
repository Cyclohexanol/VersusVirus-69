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
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container h-centered has-text-centered">
            <button className="button is-large">Deliveries History</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Volunteer;
