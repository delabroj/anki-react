import React from 'react';
import ReactDOM from 'react-dom';

function HeadBody(props) {
  return (
    <div>
      <h1>Header</h1>
      <p>body</p>
    </div>
  );
}

const element = (
  <div>
    <HeadBody />
    <HeadBody showHeader={true} />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
