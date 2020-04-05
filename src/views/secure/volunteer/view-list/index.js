import React, { Component, Fragment } from 'react';

class ViewShoppingList extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

	render() {
		return (
      <div className="is-flex-column h-centered">
        {this.props.currentOrder.map((i) => {
          
        })}
      </div>
    )
	}
}

export default ViewShoppingList;
