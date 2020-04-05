import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="top-bar no-shrink">
          <figure class="image">
            <img
              class="is-bar-logo"
              alt="home_logo"
              src="TakeEatEasy_logo_blackwhite_horiz@2x.png"
            />
          </figure>
          <Link className="button" to={'login'}>
            Sign In
          </Link>
        </div>
        <section>
          <div className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-4">What is TakeEatEasy ?</h1>
                <p>
                  The TakeEatEasy web app that allows to connect people at risk
                  when contracting the Corona Virus and volunteers willing to go
                  to the shop from someone else. The goal is also to provide an
                  alternative to the platforms such as LeShop.ch and coop@home,
                  that are currently experiencing a waiting time of 2-3 weeks.
                </p>
                <br />
                <p>
                  The built-in shopping list creation tools allows both parties
                  to efficiently go through this process. Volunteers can also
                  customize their order finding setting in order to input a
                  maximum payload weight and travel distance. TakeEatEasy aims
                  to encourage solidarity by providing tools that will enhance
                  the efficiency of voluntary delivery.
                </p>
                <br />
                <figure class="image">
                  <img alt="home_image" src="TakeEatEasy_Project69.png" />
                </figure>
              </div>
            </div>
          </div>
          <div className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">How does it work?</h1>
                <p>
                  First of all, volunteers and customers need to subscribe to
                  the platform TakeEatEasy.
                </p>
                <ul>
                  <br />
                  <li>1. The customer creates a shopping list.</li>
                  <br />
                  <li>2. All volunteers in the area receive a notification.</li>
                  <br />
                  <li>3. One of the volunteers accepts the order.</li>
                  <br />
                  <li>
                    4. The Volunteer goes to the shop using the inapp built
                    shopping list.
                  </li>
                  <br />
                  <li>
                    5. The volunteer pays for the products and delivers them to
                    the customer with a receipt.
                  </li>
                  <br />
                  <li>
                    6. The volunteer pays for the products and delivers them to
                    the customer with a receipt.
                  </li>
                  <br />
                  <li>7. The customer pays the volunteer back.</li>
                  <br />
                  <li>
                    8. Direct tipping is encouraged but it is not mandatory.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
