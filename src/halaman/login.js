import React, {Component} from 'react';

export default class Login extends Component{
	render(){
		return(
			<div className="loginbox">
				<div className="glass">
					{/*<img src="../static/img/logo-login.png" className="user"/>*/}
					<h2>Log in Here</h2>
					
					{/*<hr className="hr-kiri"/>
					<hr className="hr-kanan"/>
					<div className="hr-login">
						<span className="hr-login-text">
							atau
						</span>
					</div>*/}	
					<form>
						<div className="inputbox">
						    <span><i className="fa fa-user" aria-hidden="true"></i></span>
							<input type="text" name="" placeholder="Username"/>	
						</div>
						<div className="inputbox">
						    <span><i className="fa fa-lock" aria-hidden="true"></i></span>
							<input type="password" name="" placeholder="Password"/>
						</div>
							<input type="submit" name="" value="Login" className="custom-btn"/>
					</form>
					<p>Don't have an account? <a href=""> Register</a></p>
				</div>
			</div>
		);
	}
}