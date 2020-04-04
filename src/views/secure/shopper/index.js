import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import CreateShoppingList from './shoppingList';


class Shopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_status: '',
      shopping_list: [],
      contact: '',
      delivery_address: '',
      search: '',
      show_card: false,
      article_quantity: 1,
      special_request: ""
    };
    this.addToChart = this.addToChart.bind(this);
    this.removeChart = this.removeChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAutoCompleteChange = this.handleAutoCompleteChange.bind(this)
  }

  addToChart(item_title) {
      this.setState((prevState) => {
        let alreadyIn = prevState.shopping_list.some(
          (item) => item.name === item_title
        ) || item_title === null;
        if(!alreadyIn){
          prevState.shopping_list = [
            ...prevState.shopping_list,
            { 
              name: item_title,
              quantity: this.state.article_quantity,
              special_request: this.state.special_request
            },
          ];
        }
        prevState.show_card = false;
        prevState['search'] = '';
        return prevState;
      });
  }

  removeChart(item_title) {
    this.setState((prevState) => {
      prevState["shopping_list"] = prevState.shopping_list.filter((el) => el.name !== item_title);
      prevState["show_card"] = false;
      return prevState;
    })
  }

  handleChange(key, value) {
    this.setState((prevState) => {
      prevState[key] = value;
      return prevState;
    });
  }

  handleAutoCompleteChange(__key, value) {
    this.setState((prevState) => {
      prevState["search"] = value;
      prevState["show_card"] = value !== "" && value !== null;
      return prevState;
    });
  }

  render() {
    if (this.props.match.isExact) {
      return (
        <Fragment>
          <div>
            <Link to="/app/shoppinglist" className="button is-success">
              Create Shopping List
            </Link>
          </div>
        </Fragment>
      );
    }
    return (
      <Route
        path="/app/shoppinglist"
        render={(props) => <CreateShoppingList 
          {...props} 
          {...this.state} 
          handleChange={this.handleChange}
          remove={this.removeChart}
          handleAutoCompleteChange={this.handleAutoCompleteChange}
          removeChart={this.removeChart}
          addToChart={this.addToChart}
        />}
      />
    );
  }
}

export default Shopper;
// Si il ya un order : view status
// Si il y en a pas : no current order with button create a shopping List
// Une autre page pour create shopping list where you can add articles
// Enter Delivery address and contact number 
// submit button
// return to home page with order in Progress, waiting for volunteer for example
// timer 10 second and change status volunteer found delivery in progress, estmiated time, please ocntact volunteer
// un article est une carte avec autocomplete pour title and quantity, special request and stuff