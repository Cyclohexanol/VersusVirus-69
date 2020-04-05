import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends Component {
	render() {
		console.log(this.props.order_status);
		return(
			<Fragment>
				{this.props.order_status !== "pending" &&
					<Fragment>
						<Link className="button is-medium is-primary is-column-item" to={"/app/shoppinglist"}>Back</Link>
						<div className="card">
							<div className="card-content">
							<div className="subtitle">Delivery information</div>
							<div>Name</div>
							<div class="field">
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="John Inneed"
										onChange={(e) => this.props.changeTempInfo("contact", e.target.value)}/>
								</div>
							</div>
							<div>Address</div>
							<div class="field">
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="Heart Street, 8000 Zurich"
										onChange={(e) => this.props.changeTempInfo("delivery_address", e.target.value)}
									/>
								</div>
							</div>
							<div>Contact phone number</div>
							<div class="field">
								<div class="control">
									<input
										class="input"
										type="text"
										placeholder="+41 78 777 55 66"
										onChange={(e) => this.props.changeTempInfo("contact_phone", e.target.value)}
									/>
								</div>
							</div>
							</div>
						</div>
						<button className="button is-medium is-primary is-column-item"
							onClick={(e) => this.props.changeTempInfo("order_status", "pending")}>
							Confirm
						</button>
					</Fragment>
				}
				{this.props.order_status === "pending" &&
					<Fragment>
						<div className="card is-column-item is-light">
							<div className="card-content">
								<div>
								 Your order has been processed.
								 We are looking for a volunteer !
							 	</div>
							</div>
						</div>
						<Link
							className="button is-medium is-primary is-column-item" to={"/app"}>
							Close
						</Link>
					</Fragment>
				}


			</Fragment>
		)
	}
}

export default Confirmation;
