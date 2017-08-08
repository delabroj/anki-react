import React from 'react';
import ReactDOM from 'react-dom';

function ShoppingList(props) {
  const items = props.items;
  const listItems = items.map((item) => <li>{item}</li>)
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const fruits = ['apples', 'pears', 'bananas']

ReactDOM.render(<ShoppingList items={fruits} />, document.getElementById('root'));
