import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}



const element = (
  <Hello name="Dude" />
);

ReactDOM.render(element, document.getElementById('root'));
