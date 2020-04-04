import React, { Component, Fragment } from 'react';
import Article from '../../components/article' 
import { Link, Route, Redirect} from 'react-router-dom';
import ShoppingList from './shoppingList';

class Shopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_status: "",
      shopping_list: {},
      contact: "",
      delivery_address: ""
    };
    this.addToChart = this.addToChart.bind(this)
    console.log(this.props)
  }

  addToChart(item_title){
    this.setState(prevState => {
      prevState["shopping_list"] = {name: item_title};
      return prevState;
    });
  }

  render() {
    console.log(this.props)
    // {this.state.order_status != "" && }
      if (this.props.match.isExact) {
        return (
          <Fragment>
            <div>Shopper</div>
            <div>
              <Article title="Chocolate" addToChart={this.addToChart} interactive={true} {...this.state}/>
            </div>
            <div>
              <Link to="/app/shoppinglist" className="button is-success">View Shopping List</Link>
            </div>
          </Fragment>
        )
      }
      return(<Route path="/app/shoppinglist"  render={(props) => <ShoppingList {...props} />} />)
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