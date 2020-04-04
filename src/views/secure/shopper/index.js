import React, { Component, Fragment } from 'react';
import Article from '../../components/article' 
import { Link, Route } from 'react-router-dom';
import CreateShoppingList from './shoppingList';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Shopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_status: '',
      shopping_list: [],
      contact: '',
      delivery_address: '',
      search: '',
      show_card: false
    };
    this.addToChart = this.addToChart.bind(this);
    this.removeChart = this.removeChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAutoCompleteChange = this.handleAutoCompleteChange.bind(this)
  }

  addToChart(item_title) {
    const alreadyIn = this.state.shopping_list.some(item => item.name === item_title)
    if(!alreadyIn){
      this.handleChange("shopping_list", [...this.state.shopping_list, {'name': item_title}])
      console.log(this.state.shopping_list)
    }
  }

  removeChart(item_title) {
    this.setState((prevState) => {
      prevState["shopping_list"] = prevState.shopping_list.filter((el) => el.name !== item_title);
      prevState["show_card"] = false;
      return prevState;
    })
    console.log(this.state.shopping_list);
    console.log(this.state.show_card)
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
      prevState["show_card"] = value !== "";
      return prevState;
    });
  }

  render() {
    console.log(this.state.shopping_list)
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
            {
              this.state.show_card &&
              <Article
                title={this.state.search}
                addToChart={this.addToChart}
                remove={this.removeChart}
                {...this.state}
              />
            }
            </div>
            <div>
              <Link to="/app/shoppinglist" className="button is-success">
                Create Shopping List
              </Link>
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <Route
        path="/app/shoppinglist"
        render={(props) => <CreateShoppingList {...props} {...this.state} remove={this.removeChart} />}
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