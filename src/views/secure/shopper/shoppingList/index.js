import React, { Component, Fragment } from 'react';
import Article from '../../../components/article';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class CreateShoppingList extends Component {

  constructor(props){
    super(props)
    this.state = {
      key_autocomplete: "Init"
    }
    this.addChart = this.addChart.bind(this)
  }

  addChart(item_title){
    this.setState({
      key_autocomplete: item_title
    })
    this.props.addToChart(item_title)
  }

  render() {
    let listItems = this.props.shopping_list.map((d) =>
      <Article 
        key={d.name}
        title={d.name}
        // added={this.props.shopping_list.some(item => this.props.title === item.name)}
        add={this.addChart}
        remove={this.props.remove}
        {...this.state}
        {...this.props}
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
            key={this.state.key_autocomplete}
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
                key={this.props.search}
                title={this.props.search}
                add={this.addChart}
                remove={this.props.remove}
                onChange={this.props.handleChange}
                {...this.props}
                {...this.state}
              />
            )}
          </div>
          <div>ShoppingList</div>
          <div>{listItems}</div>
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
