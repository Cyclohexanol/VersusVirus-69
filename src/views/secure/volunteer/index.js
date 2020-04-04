import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import ViewShoppingList from './view-list';
import ViewShoppingHistory from './view-history';

class Volunteer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ordersDelivered: [],
      rangeKm: 10,
      maxLoad: 15,
      orderStatus: "",
      orderLists: [
        {
          status: "",
          address: "Heart Road 36, 8000 Zurich",
          number: "221-148",
          deliveredOn: "",
          items: [
            {
              name: "Pasta",
              quantity: "1000g",
              note: "Penne or spaghetti",
              weight: 1
            },
            {
              name: "Toast",
              quantity: "500g",
              weight: 0.5
            },
            {
              name: "Milk",
              quantity: "3L",
              note: "Skinny",
              weight: 3
            },
            {
              name: "Orange Juice",
              quantity: "2L",
              note: "Skinny",
              weight: 2
            }
          ],
          weight: 6.5,
          phone: "078 777 66 55"
        }
      ],
      activeList: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  findOrder() {
    if(this.state.ordersDelivered.length < this.state.orderLists.length) {
      this.handleChange("activeList", this.state.orderLists[this.state.ordersDelivered.length])
      this.handleChange("orderStatus", "pending")
    } else  {
      this.handleChange("orderStatus", "not found")
    }
  }

  acceptOrder() {
    this.handleChange("orderStatus", "active")
  }

  deliverOrder() {
    this.handleChange("orderStatus", "")
    this.setState((prevState) => {
      let now = new Date();
      let formatted_date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
        prevState['activeList'].deliveredOn = formatted_date;
      return prevState;
    })
    this.setState((prevState) => {
       prevState['ordersDelivered'] = [ ...this.state.ordersDelivered, this.state.activeList];
      return prevState;
    })
    this.handleChange("activeList", null)
  }

  handleChange (key, value) {
    this.setState(prevState => {
      prevState[key] = value
      return prevState
    })
  }

  render() {
    if(this.props.match.isExact) {
      return (
        <Fragment>
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container h-centered has-text-centered">
                {!this.state.activeList && <div>You currently have no pending deliveries.</div>}
                {this.state.activeList &&
                  <div className="card is-max-350">
                    <div className="card-content">
                      <p className="subtitle">Current order</p>
                      <p className="has-text-weight-semibold">Deliver to:</p>
                      <p>{this.state.activeList.address}</p>
                      <br/>
                      <p className="has-text-weight-semibold">Estimated weight:</p>
                      <p>{this.state.activeList.weight} kg</p>
                      <br/>
                      <p className="has-text-weight-semibold">Contact number:</p>
                      <p>{this.state.activeList.phone}</p>
                    </div>
                    <footer className="card-footer">
                      <Link className="card-footer-item" to={`${this.props.match.url}/view-list`}>
                        <span>
                          View shopping list
                        </span>
                      </Link>
                    </footer>
                    <footer className="card-footer">
                      {this.state.orderStatus === "pending" &&
                        <button className="card-footer-item" onClick={() => this.acceptOrder()}>
                          <span className="is-size-6">
                            Accept order
                          </span>
                        </button>
                      }
                      {this.state.orderStatus === "active" &&
                        <button className="card-footer-item" onClick={() => this.deliverOrder()}>
                          <span className="is-size-6">
                            Mark as delivered
                          </span>
                        </button>
                      }
                    </footer>
                  </div>
                }
                <br/>
                <Link className="button is-medium" to={`${this.props.match.url}/view-history`}>Deliveries History</Link>
              </div>
            </div>
          </section>
          {!this.state.activeList &&
            <section className="hero is-primary">
              <div className="hero-body">
                <div className="container">
                  {this.state.orderStatus === "not found" &&
                    <Fragment>
                      <span className="tag is-warning is-column-item is-size-6">No match found for these settings.</span>
                    </Fragment>
                  }
                  {this.state.orderStatus !== "waiting" &&
                    <Fragment>
                      <div className="title is-size-4">Find a person in need !</div>
                      <div className="subtitle is-size-5">Enter your settings</div>
                      <div className="card is-max-350">
                        <div className="card-content h-centered">
                          <div className="is-flex-column">
                            <div className="is-column-item">
                              <p>
                                Max delivery distance
                              </p>
                              <div className="field has-addons">
                                <p className="control">
                                  <input
                                    className="input"
                                    type="number"
                                    onChange={e => this.handleChange("rangeKm", e.target.value)}
                                    value={this.state["rangeKm"]}/>
                                </p>
                                <p className="control">
                                  <a className="button is-static">
                                    km
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="is-column-item">
                              <p>
                                Max load weight
                              </p>
                              <div className="field has-addons">
                                <p className="control">
                                  <input
                                    className="input"
                                    type="number"
                                    onChange={e => this.handleChange("maxLoad", e.target.value)}
                                    value={this.state["maxLoad"]}/>
                                </p>
                                <p className="control">
                                  <a className="button is-static">
                                    kg
                                  </a>
                                </p>
                              </div>
                            </div>
                            <button onClick={() => this.findOrder()} className="button is-large">
                              GO
                            </button>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  }
                  {this.state.orderStatus === "waiting" &&
                    <Fragment>
                      <p>Looking for a someone that needs help !</p>
                      <p>Thank you for your time !</p>
                    </Fragment>
                  }
                </div>
              </div>
            </section>
          }
        </Fragment>
      );
    }
    return(
      <Fragment>
        <Route path="/app/view-history"  render={(props) => <ViewShoppingHistory {...props} ordersDelivered={this.state.ordersDelivered}/>} />
        <Route path="/app/view-list"  render={(props) => <ViewShoppingList {...props} />} />
      </Fragment>
    )
  }
}

export default Volunteer;
