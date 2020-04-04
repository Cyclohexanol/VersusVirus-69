import React, { Component, Fragment } from 'react';

class Signup extends Component {
  render() {
    return(
      <div>
				<p>
        	This is a demo app. Account creation is deactivated.
				</p>
				<p>
					Please use the following dummy accounts to view the demo.
				</p>

				<h3 className="is-size-4">Buyer</h3>
				<p>
				Username: buy
				</p>
				<p>
				Password: help
				</p>

				<h3 className="is-size-4">Shop owner</h3>
				<p>
				Username: owner
				</p>
				<p>
				Password: help
				</p>

				<h3 className="is-size-4">Volunteer:</h3>
				<p>
				Username: volunteer
				</p>
				<p>
				Password: help
				</p>
      </div>
    )
  }
}

export default Signup;
