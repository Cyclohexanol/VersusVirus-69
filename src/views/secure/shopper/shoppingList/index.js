import React, { Component, Fragment } from 'react';
import Article from '../../../components/article';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    // this.remove = this.remove.bind(this)
    console.log(props);
  }

  // remove(item_title){
  //   this.setState(prevState =>
  //     prevState["shopping_list"] = {name: item_title};
  //     return prevState;
  //   )
  // }

  render() {
    // {this.state.order_status != "" && }
    return (
      <Fragment>
        <div>ShoppingList</div>
        <div>
          <Article
            title="Chocolate"
            interactive={false}
          />
        </div>
      </Fragment>
    );
  }
}

export default ShoppingList;
// Si il ya un order : view status
// Si il y en a pas : no current order with button create a shopping List
// Une autre page pour create shopping list where you can add articles
// Enter Delivery address and contact number
// submit button
// return to home page with order in Progress, waiting for volunteer for example
// timer 10 second and change status volunteer found delivery in progress, estmiated time, please ocntact volunteer
// un article est une carte avec autocomplete pour title and quantity, special request and stuff
