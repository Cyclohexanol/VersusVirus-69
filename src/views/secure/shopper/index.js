import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import CreateShoppingList from './shoppingList';


class Shopper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_status: '',
      shopping_list: [],
      shopping_lists_history: [],
      contact: '',
      contact_phone: '',
      delivery_address: '',
      search: '',
      show_card: false,
      special_request: "",
      article_quantity: 0,
      type: ""
    };
    this.addToChart = this.addToChart.bind(this);
    this.removeChart = this.removeChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAutoCompleteChange = this.handleAutoCompleteChange.bind(this);
    this.changeTempInfo = this.changeTempInfo.bind(this);
  }

  changeTempInfo(key,value) {
    this.setState((prevState) => {
      prevState[key] = value;
      return prevState;
    });
  }

  addToChart(item_title) {
      this.setState((prevState) => {
        let alreadyIn = prevState.shopping_list.some(
          (item) => item.name === item_title
        ) || item_title === null;

        let tempItem = {
          name: item_title,
          quantity: this.state.article_quantity,
          special_request: this.state.special_request,
          type: this.state.type
        }

        if(!alreadyIn){
          prevState.shopping_list = [
            ...prevState.shopping_list,
            tempItem,
          ];
        }

        this.setState({
          special_request: "",
          article_quantity: 0,
          special_request: "",
          type: ""
        });
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
          <section className="hero is-light">
            <div className="hero-body">
              {this.state.order_status === "pending" &&
                <div className="container h-centered has-text-centered">
                  <div className="card is-max-350">
                    <div className="card-content">
                      <p className="subtitle">Current order</p>
                      <p className="has-text-weight-semibold">Deliver to:</p>
                      <p>{this.state.contact}</p>
                      <p>{this.state.delivery_address}</p>
                      <br/>
                      <div className="tag is-primary">Looking for a volunteer</div>
                    </div>
                  </div>
                </div>
              }
              {this.state.order_status !== "pending" &&
                <p>
                  You currently have no pending deliveries. Click on the button below to create one.
                </p>
              }
            </div>
          </section>
          {!this.state.order_status &&
            <Link to="/app/shoppinglist" className="button is-primary">
              Create Shopping List
            </Link>
          }
          {this.state.order_status &&
            <section className="hero is-primary">
              <div className="hero-body">
                <div className="container">
                  <p>Please wait while we process your order.</p>
                  <p>You will get notified of an estimated delivery time soon ...</p>
                </div>
              </div>
            </section>
          }
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Route
          path="/app/shoppinglist"
          render={(props) => <CreateShoppingList
            {...props}
            {...this.state}
            order_status={this.state.order_status}
            handleChange={this.handleChange}
            remove={this.removeChart}
            changeTempInfo={this.changeTempInfo}
            handleAutoCompleteChange={this.handleAutoCompleteChange}
            removeChart={this.removeChart}
            addToChart={this.addToChart}
          />}
        />
      </Fragment>
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
