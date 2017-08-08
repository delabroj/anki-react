import React from 'react';
import ReactDOM from 'react-dom';

function List() {
  const fruit = ['apples', 'pears', 'bananas'];
  const listItems = fruit.map((item) => <li>{item}</li>);
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ReactDOM.render(<List />, document.getElementById('root'));
