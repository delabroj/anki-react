import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Boiling</p>
  }
  return <p>Not boiling</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={this.state.temperature}
          onChange={this.handleChange} />
        
      </fieldset>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
