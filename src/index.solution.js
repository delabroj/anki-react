import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.any.isRequired
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
