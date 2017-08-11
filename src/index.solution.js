import React from 'react';
import ReactDOM from 'react-dom';

function BI(props) {
  return <b><i>{props.children}</i></b>
}

const element = <BI>bold and italic</BI>

ReactDOM.render(element, document.getElementById('root'));
