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
            <Route path='/about/:name' component={About} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
        <Footer />
      </div>
    )
  }
}

const About = (props) => (
  <div>
    <h1>Hello, {props.params.name}</h1>
  </div>
);

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
    <Link to="/about">About</Link>&nbsp;
    <Link to="/about/dude">About/dude</Link>&nbsp;
  </div>
);

const Home = () => (
  <div>
    <h1>Hello from Home!</h1>
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
