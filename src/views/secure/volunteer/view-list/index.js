import React, { Component, Fragment } from 'react';
import ArticleCard from '../../../components/article-card';
import { Link } from 'react-router-dom';

class ViewShoppingList extends Component {
	render() {
		return (
			<Fragment>
				<Link className="button is-medium is-primary" to={"/app"}>Back</Link>
	      <div className="is-flex-column h-centered">
	        {this.props.currentOrder.items.map((i) => {
	          return(
	            <ArticleCard
	              key={i.name}
	              title={i.name}
	              item_quantity={i.quantity}
	              item_special_request={i.note}
	              item_type={i.type}
								item_read={i.ready}
								orderStatus={this.props.orderStatus}
	            />
	          )
	        })}
	      </div>
			</Fragment>
    )
	}
}

export default ViewShoppingList;
