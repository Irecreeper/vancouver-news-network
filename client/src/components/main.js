import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import View_art_but from './view_art_but.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Image from 'react-bootstrap/Image'
import Logo from './images/ven_logo.png'
import Card from './card.js'
import InfiniteScroll from 'react-infinite-scroll-component'

import NavBar from './navbar'
import { useShallowEqual } from 'shouldcomponentupdate-children'

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
}

class Main extends React.Component {
  state = {
    items: Array.from({ length: 2 }),
  }

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 2 })),
      })
    }, 0)
  }

  render() {
    return (
      <div id="container">
        <NavBar />

        {this.state.items.map((i, index) => (
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            <div key={index}>
              <div class="container">
                <div id="news-card-area">
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </InfiniteScroll>
        ))}
      </div>
    )
  }
}
const PerformantMain = useShallowEqual(Main)

export default PerformantMain
