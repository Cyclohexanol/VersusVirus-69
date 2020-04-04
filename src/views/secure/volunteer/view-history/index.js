import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

class ViewShoppingHistory extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

	render() {
		return (
      <div className="is-flex-column sapce-between is-fullheight">
      <Link className="button is-medium is-primary is-column-item" to={"/app"}>Back</Link>
        <div className="is-flex-column h-centered">
          {this.props.ordersDelivered.length < 1 &&
            <div className="card is-max-350 is-column-item">
              <div className="card-content h-centered">
                <p>You did not deliver any orders yet.</p>
              </div>
            </div>
          }
          {this.props.ordersDelivered.length > 0 &&
            this.props.ordersDelivered.map((order) => {
              return(
                <div key={order.number} className="card is-max-350 is-column-item">
                  <div className="card-content h-centered">
                    <p className="subtitle">Order {order.number}</p>
                    <p className="has-text-weight-semibold">Deliver to:</p>
                    <p>{order.address}</p>
                    <p>{order.deliveredOn}</p>
                    <br/>
                    <p className="has-text-weight-semibold">Contact number:</p>
                    <p>{order.phone}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
	}
}

export default ViewShoppingHistory;
