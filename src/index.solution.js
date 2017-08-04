import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    )
  }
}

const element = (
  <Hello name="Dude" />
);

ReactDOM.render(element, document.getElementById('root'));
