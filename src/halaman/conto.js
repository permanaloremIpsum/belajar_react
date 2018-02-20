import React from 'react';

export default class Conto extends React.Component{
	constructor(props) {
	super(props);
	this.state = {
	  username: '',
	  password: '',
	};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(target.value)
  }

  render() {
    return (
      <form>
        <label>
          Username :
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Password :
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}