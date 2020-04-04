import React, { Component, Fragment } from 'react';
import Article from '../../../components/article';

class CreateShoppingList extends Component {

  render() {
    const listItems = this.props.shopping_list.map((d) =>
        <Article 
          title={d.name}
          added={true}
          remove={this.props.remove}
        />
      )
    // {this.state.order_status != "" && }
    return (
      <Fragment>
        <div>ShoppingList</div>
        <div>
          {listItems}
        </div>
      </Fragment>
    );
  }
}

export default CreateShoppingList;
// Si il ya un order : view status
// Si il y en a pas : no current order with button create a shopping List
// Une autre page pour create shopping list where you can add articles
// Enter Delivery address and contact number
// submit button
// return to home page with order in Progress, waiting for volunteer for example
// timer 10 second and change status volunteer found delivery in progress, estmiated time, please ocntact volunteer
// un article est une carte avec autocomplete pour title and quantity, special request and stuff
