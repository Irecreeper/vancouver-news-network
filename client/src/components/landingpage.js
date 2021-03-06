/* 
The landing page. Actually a deal more advanced than most pages on the site.

The Landing Page has two different formats; on sufficiently small screen sizes, the page 
changes somewhat to a more mobile-friendly format. While all pages do this, the landing
page does this to a far greater degree.
*/

import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'
import About_us_but_lp from './about_us_but_lp.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'
import InfiniteScroll from 'react-infinite-scroll-component'
import { FacebookProvider, Comments } from 'react-facebook'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { apiResponse: '' }
  }
  /* A test function to ensure that the API is working. */
  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
  }

  /* Calls the test function. */
  componentWillMount() {
    this.callAPI()
  }

  render() {
    return (
      <div className="text-center text-white">
        <div className="container2">
          <div className="panel top">
            {/*<p>{this.state.apiResponse}</p>*/}
            <main role="main" className="cover">
              <Image
                src={Logo}
                className="person-mug mx-auto d-block"
                alt="Eco Standards"
                id="logo"
                fluid
                rounded
              />
              <h1 className="text-on-background-lg font-el">
                Vancouver Eco News
              </h1>
              <h2 className="text-on-background-lg font-el hide-sm">
                Your local news aggregate for all things green
              </h2>
              <div
                id="landing-navigate"
                className="container is-narrow hide-sm"
              > {/* Replaced with a more mobile-friendly box on smaller screens. */}
                <div className="row border-between"> 
                  <div className="col-md-4">
                    <h3 className="font-ro">View Articles</h3>
                  </div>
                  <div className="col-md-4">
                    <p className="font-ro">
                      Interested in enviromental and ecological news? Come view
                      some amazing articles.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <section>
                      <View_art_but />
                    </section>
                  </div>
                </div>
              </div>

              <div className="show-sm"> {/* Only appears at small screen sizes. */}
                {' '}
                <View_art_but />
                <br />
                <About_us_but_lp />
              </div>

              <footer id="landing-footer">
                <section className="hide-sm"> {/* Only appears at bigger screen sizes. */}
                  <About_us_but_lp />
                </section>
                <p className="text-on-background-sm font-ro">
                  Powered by News API
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
