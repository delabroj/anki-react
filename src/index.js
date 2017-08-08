import React from 'react';
import ReactDOM from 'react-dom';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  

  render() {
    return (
      <div>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
        <p>I am {this.state.isGoing ? '' : 'not'} going{!this.state.isGoing ? '.' : ', and so are my ' + this.state.numberOfGuests + ' guests.'}</p>
      </div>
    );
  }
}

ReactDOM.render(<Reservation />, document.getElementById('root'));
