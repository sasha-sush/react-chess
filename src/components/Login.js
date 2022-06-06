import React from "react";

//import Alert from 'react-bootstrap/Alert';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			passStrenClass: "",
			passMsg : ""
		};
	}
	
	checkPasswordStrength(){

		let 
		pass = document.getElementById('userpassword').value,
		
		msg = '', hclass = '', 
		strength = 0;
	
	
		if(pass.search('[0-9]+') !== -1) ++strength;
		if(pass.search('[A-ZА-ЯЇЄ]+') !== -1) ++strength;
		if(pass.search('[a-zа-яїє]+') !== -1) ++strength;
		
		switch(strength){
			default:
			case 1:
				msg = "(слабкий)";
				hclass = 'passWeak';
				break;
			case 2:
				msg = "(середній)";
				hclass = 'passMedium';
				break;
			case 3:
				msg = "(сильний)";
				hclass = 'passStrong';
				break;
		}
	
		if(pass === ''){
			msg = '';
			hclass = '';
		}
	
		this.setState({
			passStrenClass: hclass,
			passMsg : msg
		});
	}

	validateOnSubmit(ev){
		const minnamelen = 5, minpasslen = 6;
		let errMsg = [];
		let username = document.getElementById('username').value;
		if(username.length === 0){
			errMsg.push('Ім\'я є обов\'язковим полем');
		} else if(username.length < minnamelen){
			errMsg.push('Ім\'я має бути довшим ніж ' + minnamelen + ' символів');
		}
		let userpass = document.getElementById('userpassword').value;
		if(userpass.length === 0){
			errMsg.push('Пароль є обов\'язковим полем');
		} else if(userpass.length < minpasslen){
			errMsg.push('Пароль має бути довшим ніж ' + minpasslen + ' символів');
		}
		if(errMsg.length !== 0){
			window.alert(errMsg.join('\n'));
			ev.preventDefault();
		}
	}

    render(){
		return (
        <div id="login-div">
            <form action="/" method="GET" id="login-form" onSubmit={this.validateOnSubmit}>
				<div>
					<label htmlFor="username">Ім’я</label><br/>
					<input type="text" name="username" id="username"/>
				</div>
				<div>
					<label htmlFor="userpassword">Пароль </label>
					<span id="passwordStrength" className={this.state.passStrenClass}>
						{this.state.passMsg}
					</span><br/>
					<input type="password" name="userpassword" id="userpassword" onInput={()=> this.checkPasswordStrength()}/>
				</div>
				<div>
					<label>Стать</label><br/>
					<select name="sex">
						<option value="male">Чоловік</option>
						<option value="female">Жінка</option>
					</select>
				</div>
				<div>
					<label>Сторона</label><br/>
					<section className="center">
						<input type="radio" name="team" value="black" defaultChecked/>
						<label htmlFor="black">Чорні</label>

						<input type="radio" name="team" value="white"/>
						<label htmlFor="white">Білі</label>
					</section>
				</div>
				<div>
					<label htmlFor="about">Про себе</label><br></br>
					<textarea name="about" id="about"></textarea>
				</div>
				<div className="center">
					<input type="hidden" name="hiddenValue" value="I like chess"/>
					<input type="submit" value="Відправити" id="submit-button"/>
				</div>
			</form>
        </div>
    	);
	}
}

export default Login;