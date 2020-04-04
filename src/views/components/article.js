import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {

  render() {
    const added = this.props.shopping_list.some(
      (item) => item.name === this.props.title
    );
    return (
      <div className="card">
        <div className="card-content">
          <header className="card-head">
            <p className="card-title">{this.props.title}</p>
          </header>
          {/* <section className="card-body">{this.props.title}</section> */}
          <footer className="card-foot">
            {!added && (
              <button
                onClick={() => this.props.add(this.props.title)}
                class="button is-success"
              >
                Add to chart
              </button>
            )}
            {added && (
              <button
                onClick={() => this.props.remove(this.props.title)}
                className="delete"
                aria-label="close"
              ></button>
            )}
          </footer>
        </div>
      </div>
    );
  }
}

export default Article;
