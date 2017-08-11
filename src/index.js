import React from 'react';
import ReactDOM from 'react-dom';



class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {first: '', second: '', concat: ''};
    this.handleChange = this.handleChange.bind(this);
    this.concat = this.concat.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    this.concat();
  }

  concat() {
    this.setState(
      prevState => ({concat: prevState.first + prevState.second})
    );
  }

  termNames = ['first', 'second'];

  render() {
    return (
      <div>
        {this.termNames.map(name => (
          <Term
            key={name}
            value={this.state[name]}
            handleChange={this.handleChange}
            name={name} />
        ))}
        <p>{this.state.concat}</p>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
