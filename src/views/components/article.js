import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: this.props.added || false,
    };
    this.addToChart = this.addToChart.bind(this)
    this.remove = this.remove.bind(this)
  }

  addToChart(){
    this.setState((prevState) => {
      prevState["added"] = true;
      return prevState;
    });
    this.props.addToChart(this.props.title)
  }

  remove(){
    this.setState((prevState) => {
      prevState['added'] = false;
      return prevState;
    });
    this.props.remove(this.props.title)
  }

  render() {
    return (
        <div className="card">
          <div className="card-content">
            <header className="card-head">
              <p className="card-title">{this.props.title}</p>
            </header>
            {/* <section className="card-body">{this.props.title}</section> */}
            <footer className="card-foot">
              {!this.state.added && (
                <button
                  onClick={this.addToChart}
                  class="button is-success"
                >
                  Add to chart
                </button>
              )}
              {this.state.added && (
                <button onClick={this.remove} className="delete" aria-label="close"></button>
              )}
            </footer>
          </div>
        </div>
    );
  }
}

export default Article;
