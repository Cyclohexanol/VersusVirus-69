import React, { Component, Fragment } from 'react';
import Home from './views/public/home';
import Login from './views/public/login';
import Signup from './views/public/signup';
import Secure from './views/secure';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isAuthenticated: false
    }
  }

  render() {
    return (
        <Router>
          <div className="app">
            <Route exact path="/" render={() => (
              this.state.isAuthenticated ?
                <Redirect to="/app"/>
                : <Redirect to="/home"/>
              )
            }/>
            <PublicRoute path='/home' component={Home} isAuthenticated={this.state.isAuthenticated} />
            <PublicRoute path='/login' component={Login} isAuthenticated={this.state.isAuthenticated} />
            <PublicRoute path='/signup' component={Signup} isAuthenticated={this.state.isAuthenticated} />
            <SecureRoute path='/app' component={Secure} isAuthenticated={this.state.isAuthenticated} />
            <Route exact path='/app' render={() => <Redirect to='/app/home' />} />
          </div>
        </Router>
    );
  }
}

const SecureRender = props => {
  return props.isAuthenticated ? (
    <props.component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/home',
        state: { from: props.location }
      }}
    />
  )
}

const SecureRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => <SecureRender {...props} component={Component} isAuthenticated={isAuthenticated} />}
  />
)

const PublicRender = props => {
  return props.isAuthenticated ? (
    <Redirect
      to={{
        pathname: (props.location.state && props.location.state.from.pathname) || '/app/home'
      }}
    />
  ) : (
    <props.component {...props} />
  )
}

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => <PublicRender {...props} component={Component} isAuthenticated={isAuthenticated} />}
  />
)

export default App;
