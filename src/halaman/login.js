import React, {Component} from 'react';
import './login.css'

export default class Login extends Component{

  constructor(props) {
  super(props);
  this.state = {
	username: '',
    password: '',
  };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(name, value)
  }

  handleInputSubmit(event) {
    alert('Welcome Home : ' + this.state.username + ' , Password Anda : ' + this.state.password);
    event.preventDefault();
  }

	render(){
		return(
			<div className="loginbox">
				<div className="glass">
					<h2>Log in Here</h2>
					<form onSubmit={this.handleInputSubmit}>
						<div className="inputbox">
						    <span><i className="fa fa-user" aria-hidden="true"></i></span>
							<input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Username"/>	
						</div>
						<div className="inputbox">
						    <span><i className="fa fa-lock" aria-hidden="true"></i></span>
							<input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password"/>
						</div>
							<input type="submit" value="Login" className="custom-btn"/>
					</form>
					<p>Don't have an account? <a href=""> Register</a></p>
				</div>
			</div>
		);
	}
}