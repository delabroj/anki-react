import React from 'react';
import ReactDOM from 'react-dom';

function List() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((number) => <li>{number}</li>)}
    </ul>
  );
}

ReactDOM.render(<List />, document.getElementById('root'));
