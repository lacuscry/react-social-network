import classes from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';
import {loginThunk} from '../../Redux/auth-reducer';
import {connect} from 'react-redux';
import React from 'react';
import {compose} from 'redux';
import {Navigate} from 'react-router-dom';


class Login extends React.Component{
	login = formData => {
		this.props.loginThunk(formData.email, formData.password, formData.rememberMe);
	}


	render(){
		if(this.props.isAuth){
			return <Navigate to='/profile'/>
		} 
		

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
	isAuth: state.auth.isAuth
});


export default compose(connect(mapStateToProps, {loginThunk}))(Login);