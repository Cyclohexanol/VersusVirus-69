import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {

  constructor(props){
    super(props)
    this.onChangeRequest = this.onChangeRequest.bind(this)
    this.onChangeQuantity = this.onChangeQuantity.bind(this)
  }

  onChangeQuantity(e) {
    const added = this.props.shopping_list.some(
      (item) => item.name === this.props.title
    );
    if(added){
      this.props.onChange('article_quantity', e.target.value);
    }
  }

  onChangeRequest(e) {
    const added = this.props.shopping_list.some(
      (item) => item.name === this.props.title
    );
    if(added){
      this.props.onChange('special_request', e.target.value);
    }
  }

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
          <section className="card-body">
            <br />
            Quantity : <br />
            <input
              key="quantity"
              type="number"
              onChange={this.onChangeQuantity}
              defaultValue={this.props.shopping_list[this.props.title] !== undefined ? this.props.shopping_list[this.props.title].quantity : ''}
            />
            <br />
            Special Request :
            <input
              key="special_request"
              type="textbox"
              onChange={this.onChangeRequest}
              defaultValue={this.props.shopping_list[this.props.title] !== undefined ? this.props.shopping_list[this.props.title].special_request : ''}
            />
            <br />
            <br />
          </section>
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
//Quantite L/Kg
//TickBox
//Special Request
//Address delivery
//Contact Number
