import React, { Component, Fragment } from 'react';
import Home from './views/public/home';
import Login from './views/public/login';
import Signup from './views/public/signup';
import Secure from './views/secure';
import Cookies from 'universal-cookie';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      userId: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    const cookies = new Cookies();
    var id = cookies.get('userId');
    var isAuthenticated = cookies.get('isAuthenticated');
    if(id && isAuthenticated) {
      this.handleChange("userId", parseInt(id))
      this.handleChange("isAuthenticated", true)
    }
  }

  login (id) {
    const cookies = new Cookies();
    this.handleChange("userId", parseInt(id))
    this.handleChange("isAuthenticated", true)
    cookies.set('userId', id, { path: '/' });
    cookies.set('isAuthenticated', true, { path: '/' });
  }

  logout () {
    const cookies = new Cookies();
    this.handleChange("isAuthenticated", false)
    this.handleChange("userId", 0)
    cookies.remove('userId', { path: '/' });
    cookies.remove('isAuthenticated', { path: '/' });
  }

  handleChange (key, value) {
    this.setState(prevState => {
      prevState[key] = value
      return prevState
    })
  }

  render() {
    return (
      <Router basename={window.location.pathname || ''}>
        <div className="app">
          <Route
            exact
            path="/"
            render={() =>
              this.state.isAuthenticated ? (
                <Redirect to="/app" />
              ) : (
                <Redirect to="/home" />
              )
            }
          />
          <PublicRoute
            path="/home"
            component={Home}
            isAuthenticated={this.state.isAuthenticated}
          />
          <PublicRoute
            path="/login"
            component={Login}
            isAuthenticated={this.state.isAuthenticated}
            login={this.login}
          />
          <PublicRoute
            path="/signup"
            component={Signup}
            isAuthenticated={this.state.isAuthenticated}
          />
          <SecureRoute
            path="/app"
            component={Secure}
            isAuthenticated={this.state.isAuthenticated}
            logout={this.logout}
            userId={this.state.userId}
          />
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
        pathname: '/login',
        state: { from: props.location }
      }}
    />
  )
}

const SecureRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => <SecureRender {...props} {...rest} component={Component} isAuthenticated={isAuthenticated} />}
  />
)

const PublicRender = props => {
  return props.isAuthenticated ? (
    <Redirect
      to={{
        pathname: '/app'
      }}
    />
  ) : (
    <props.component {...props} />
  )
}

const PublicRoute = (  {component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => <PublicRender {...rest} {...props} component={Component} isAuthenticated={isAuthenticated} />}
  />
)

export default App;
