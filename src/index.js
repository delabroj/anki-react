import React from 'react';
import ReactDOM from 'react-dom';



const fruits = ['apples', 'pears', 'bananas']

ReactDOM.render(<ShoppingList items={fruits} />, document.getElementById('root'));
