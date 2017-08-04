import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function Hello(props) {
  return <h1>Hello, {props.name}!</h1>
}

const element = (
  <Hello name="Dude" />
);

ReactDOM.render(element, document.getElementById('root'));
