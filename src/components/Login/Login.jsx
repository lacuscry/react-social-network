import classes from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';
import {loginThunk} from '../../Redux/auth-reducer';
import {connect} from 'react-redux';
import React from 'react';
import {compose} from 'redux';


class Login extends React.Component{
	login = formData => {
		this.props.loginThunk(formData);
	}


	render(){
		return(
			<main className={classes.authorization}>
				<div className='container'>
					<div className={classes.wrapper}>
						<h1 className={classes.title}>Login</h1>
						<LoginForm onSubmit={this.login}/>
					</div>
				</div>
			</main>
		)
	}
}


const mapStateToProps = state => ({
	auth: state.auth
});


export default compose(connect(mapStateToProps, {loginThunk}))(Login);