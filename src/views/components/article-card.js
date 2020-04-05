import React, { Component, Fragment } from 'react';


class ArticleCard extends Component {

	constructor(props){
		super(props)
		this.state = {
			ready: false
		}
	}

	toggleReady () {
		let state = !this.state.ready;
		this.setState({
			ready: state
		})
	}

  render() {
		return(
			<div className="card is-fullwidth">
        <div className="card-content">
					<div className="is-flex space-between">
						<p className="subtitle has-text-weight-bold">{this.props.title}</p>
						{this.props.orderStatus === "active" && !this.state.ready &&
							<button
								className="button is-small is-primary is-outlined"
								onClick={() => this.toggleReady()}
							>Tick</button>
						}
						{this.props.orderStatus === "active" && this.state.ready &&
							<button
								className="button is-small is-primary"
								onClick={() => this.toggleReady()}
							>Picked up</button>
						}
					</div>
					{this.props.item_special_request &&
						<Fragment>
							<p className="has-text-weight-semibold">Special Request</p>
							<p>{this.props.item_special_request}</p>
							<br/>
						</Fragment>
					}
					<p className="has-text-weight-semibold">Quantity</p>
					<p>{this.props.item_quantity} {this.props.item_type}</p>
				</div>

			</div>
		)
	}
}

export default ArticleCard;
