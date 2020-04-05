import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const added = this.props.shopping_list.some(
      (item) => item.name === this.props.title
    );
    return (
      <div className="card">
        <div className="card-content">
          <p className="subtitle">{this.props.title}</p>
          <div>Quantity</div>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                key="quantity"
                type="number"
                onChange={(e) => this.props.changeTempInfo("article_quantity",e.target.value)}
                defaultValue={this.props.item_quantity ? this.props.item_quantity : 1}
                disabled={this.props.modifiable ? false : true}
              />
            </div>
            {!this.props.modifiable &&
              <p class="control">
                <a class="button is-static">
                  {this.props.item_type ? this.props.item_type : "units"}
                </a>
              </p>
            }
            {this.props.modifiable &&
              <p class="control">
                <span class="select" onChange={(e) => this.props.changeTempInfo("type",e.target.value)}>
                  <select>
                    <option>units</option>
                    <option>grams</option>
                    <option>liters</option>
                  </select>
                </span>
              </p>
            }

          </div>
          <div>Special request</div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                key="special_request"
                type="textbox"
                onChange={(e) => this.props.changeTempInfo("special_request",e.target.value)}
                defaultValue={this.props.item_special_request ? this.props.item_special_request : ""}
                disabled={this.props.modifiable ? false : true}
              />
            </div>
          </div>
          <div className="card-footer">
            {!added &&
              <div
                className="card-footer-item is-primary-background"
                onClick={() => this.props.add(this.props.title)}>
                  Add to chart
              </div>
            }
            {added &&
              <button
                onClick={() => this.props.remove(this.props.title)}
                className="card-footer-item is-theme-red-background"
              >
                Remove
              </button>
            }
          </div>
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
