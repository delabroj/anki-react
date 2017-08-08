import React from 'react';
import ReactDOM from 'react-dom';



const NameForm = (
<form >
  <label>
    Name:
    <input type="text" />
  </label>
  <input type="submit" value="Submit" />
</form>);

ReactDOM.render(NameForm, document.getElementById('root'));
