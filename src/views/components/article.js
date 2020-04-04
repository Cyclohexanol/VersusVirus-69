import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
    };
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
            {this.props.interactive && (
              <button
                onClick={() => this.props.addToChart(this.props.title)}
                class="button is-success"
              >
                Add to chart
              </button>
            )}
            {!this.props.interactive && (
              <button className="delete" aria-label="close"></button>
            )}
          </footer>
        </div>
      </div>
    );
  }
}

export default Article;
