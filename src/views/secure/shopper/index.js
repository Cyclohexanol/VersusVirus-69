import React, { Component, Fragment } from 'react';
import Article from '../../components/article' 
import { Link, Route } from 'react-router-dom';
import ShoppingList from './shoppingList';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Shopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_status: '',
      shopping_list: {},
      contact: '',
      delivery_address: '',
      search: '',
    };
    this.addToChart = this.addToChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAutoCompleteChange = this.handleAutoCompleteChange.bind(this)
  }

  addToChart(item_title) {
    this.setState((prevState) => {
      prevState['shopping_list'] = { name: item_title };
      return prevState;
    });
  }

  removeChart(item_title) {
    this.setState((prevState) => {});
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
      return prevState;
    });
  }

  render() {
    let foodAvailable = ['Chocolate', 'Beans', 'Stuff', 'Other Stuff'];
    // {this.state.order_status != "" && }
    if (this.props.match.isExact) {
      return (
        <Fragment>
          <div>Shopper</div>
          <div style={{ width: 300 }}>
            <Autocomplete
              freeSolo
              options={foodAvailable.map((option) => option)}
              onChange={this.handleAutoCompleteChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
            <div>
              <Article
                title={this.state.search}
                addToChart={this.addToChart}
                interactive={true}
                {...this.state}
              />
            </div>
            <div>
              <Link to="/app/shoppinglist" className="button is-success">
                View Shopping List
              </Link>
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <Route
        path="/app/shoppinglist"
        render={(props) => <ShoppingList {...props} {...this.state} />}
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