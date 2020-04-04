import React, { Component, Fragment } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Shopper from './shopper';
import Volunteer from './volunteer';

class Secure extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Fragment>
        {this.props.userId === 1 && <Shopper {...this.props}/>}
        {this.props.userId === 3 && <Volunteer />}
        {this.props.userId !== 3 && this.props.userId !== 1 && "Can't resolve User Type"}
      </Fragment>
    );
  }
}

export default Secure;
