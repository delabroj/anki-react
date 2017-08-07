import React from 'react';
import ReactDOM from 'react-dom';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" >
      Click me
    </a>
  );
}

ReactDOM.render(<ActionLink />, document.getElementById('root'));
