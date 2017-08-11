import React from 'react';
import ReactDOM from 'react-dom';

function Term(props) {
  return (
    <input
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
    />
  );
}



ReactDOM.render(<Concat />, document.getElementById('root'));
