import React, { Component, Fragment } from 'react';
import Article from '../../../components/article';
import Confirmation from './confirmation';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link, Route } from 'react-router-dom';

class CreateShoppingList extends Component {

  constructor(props){
    super(props)
    this.state = {
      key_autocomplete: "Init"
    }
    this.addChart = this.addChart.bind(this)
  }

  addChart(item){
    this.setState({
      key_autocomplete: item.name
    })
    this.props.addToChart(item)
  }

  render() {
    let foodAvailable = [
      {
        name: 'Chocolate',
        type: 'g'
      },
      {
        name: 'Beans',
        type: 'g'
      },
      {
        name: 'Milk',
        type: 'L'
      },
      {
        name: 'Orange Juice',
        type: 'L'
      }];
    if(this.props.match.isExact) {
      return (
        <Fragment>
          <Link className="button is-medium is-primary is-column-item" to={"/app"}>Back</Link>
          <div className="is-flex-column is-fullheight h-centered is-column-item">
            <div className="subtitle is-size-3">Create Shopping List</div>
            <div className="is-column-item" style={{ minWidth: 300 }}>
              <Autocomplete
                freeSolo
                key={this.state.key_autocomplete}
                options={foodAvailable.map((option) => option.name)}
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
                    changeTempInfo={this.changeTempInfo}
                    {...this.props}
                    {...this.state}
                    modifiable
                  />
                )}
              </div>
            </div>
            <div className="subtitle is-size-4">
              My List
            </div>
            {this.props.shopping_list.length === 0 &&
              <div className="card">
                <div className="card-content">
                  Your list is currently empty type a product name in the search bar to add an item.
                </div>
              </div>
            }
            {this.props.shopping_list.map((d) => {
              return(
                <Article
                  key={d.name}
                  title={d.name}
                  item_quantity={d.quantity}
                  item_special_request={d.special_request}
                  item_type={d.type}
                  add={this.addChart}
                  remove={this.props.remove}
                  {...this.state}
                  {...this.props}
                />
              )}
            )}
          </div>
          {this.props.shopping_list.length !== 0 &&
            <Link className="button is-medium is-primary" to={"/app/shoppinglist/confirm"}>Request delivery</Link>
          }
        </Fragment>
      );
    }
    return (
      <Route
        path="/app/shoppinglist/confirm"
        render={(props) => <Confirmation
          {...props}
          order_status ={this.props.order_status}
          changeTempInfo={this.props.changeTempInfo}
        />}
      />
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
