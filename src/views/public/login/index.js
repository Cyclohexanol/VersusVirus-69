import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit() {
    if(this.state.password != "help") return;
    else if (this.state.username == "buy") {
      this.props.login(1)
    } else if (this.state.username == "owner") {
      this.props.login(2)
    } else if (this.state.username == "volunteer") {
      this.props.login(3)
    }
  }

  handleChange (key, value) {
    this.setState(prevState => {
      prevState[key] = value
      return prevState
    })
  }

  render() {
    return (
      <Fragment>
        <section className="hero is-light is-fullheight">
          <div className="hero-body">
            <div className="container h-centered has-text-centered">
              <figure class="image is-column-item">
                <img className="is-login-logo" src="TakeEatEasy_logo_colored@2x.png"/>
              </figure>
              <div className="card">
                <div className="card-content h-centered">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        onChange={e => this.handleChange("username", e.target.value)}/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        onChange={e => this.handleChange("password", e.target.value)}/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-medium"
                        onClick={() => this.submit()}
                      >
                        CONNECT
                      </button>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <Link className="card-footer-item" to={'signup'}>
                    <p>Register</p>
                  </Link>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Login;
