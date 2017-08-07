import React from 'react';
import ReactDOM from 'react-dom';

function ActionLink() {
  

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

ReactDOM.render(<ActionLink />, document.getElementById('root'));
