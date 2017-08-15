import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='address' component={Address}>
              <IndexRoute component={Twitter} />
              <Route path='instagram' component={Instagram} />
            </Route>
            <Route path='third' component={Third} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
        <Footer />
      </div>
    )
  }
}

const Address = (props) => (
  <div>
    <h1>We are located at:</h1>
    <h2>555 Jackson St.</h2>
    <Link to="/address">Twitter</Link>&nbsp;
    <Link to="/address/instagram">Instagram</Link>
    {props.children}
  </div>
);

const Twitter = () => <h3>Twitter Feed</h3>
const Instagram = () => <h3>Instagram Feed</h3>

const Container = (props) => (
  <div>
    <Navigate />
    {props.children}
  </div>
)

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
)

const Navigate = () => (
  <div>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/address">Address</Link>&nbsp;
    <Link to="/third">Third</Link>&nbsp;
  </div>
);

const Home = () => (
  <div>
    <h1>Hello from Home!</h1>
  </div>
);

const Third = () => (
  <div>
    <h1>This is the third page.</h1>
  </div>
);

const Footer = () => (
  <div>
    <hr />
    <p>Copyright 2025</p>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
