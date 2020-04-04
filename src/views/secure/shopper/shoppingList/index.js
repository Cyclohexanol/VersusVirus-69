import React, { Component, Fragment } from 'react';
import Article from '../../../components/article';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class CreateShoppingList extends Component {

  render() {
    const listItems = this.props.shopping_list.map((d) =>
      <Article 
        title={d.name}
        added={true}
        addToChart={this.props.addToChart}
        remove={this.props.remove}
      />
    )
    let foodAvailable = ['Chocolate', 'Beans', 'Stuff', 'Other Stuff'];
    // {this.state.order_status != "" && }
    return (
      <Fragment>
        <div>Create Shopping List</div>
        <div style={{ width: 300 }}>
          <Autocomplete
            freeSolo
            options={foodAvailable.map((option) => option)}
            onChange={this.props.handleAutoCompleteChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                margin="normal"
                variant="outlined"
              />
            )}
          />
          <div>
            {this.props.show_card && (
              <Article
                title={this.props.search}
                addToChart={this.props.addToChart}
                remove={this.props.removeChart}
                {...this.props}
                {...this.state}
              />
            )}
          </div>
          <div>ShoppingList</div>
          <div>
            {listItems}
          </div>
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
