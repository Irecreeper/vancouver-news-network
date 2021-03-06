/* 
The button that takes you to the About Us Page.
This appears on the header bar.
*/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class About_us_but extends Component {
  constructor(props) {
    super(props)

    this.go = this.go.bind(this)
  }

  //REMEMBER: There must be a proper "route" established in App.js's <Switch> area!
  go() {
    this.props.history.push('/about')
  }

  render() {
    return (
      <div className="foo">
        <button
          id="view_button"
          type="button"
          className="btn btn-secondary nav-option"
          onClick={this.go}
        >
          About Us
        </button>
      </div>
    )
  }
}

export default withRouter(About_us_but)
