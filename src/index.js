import React from 'react';
import ReactDOM from 'react-dom';

class TextUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

ReactDOM.render(<TextUpdate />, document.getElementById('root'));
