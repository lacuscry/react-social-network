import classes from './LoginForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {fieldCreator} from '../../common/FormsControls/FormsControls';
import {requiredField, maxLengthThunk} from '../../../utils/validators/validators';


const maxLength25 = maxLengthThunk(25);


function LoginForm(props){
	return(
		<form onSubmit={props.handleSubmit} className={classes.form}>
			<div className={classes.row}>
				<Field validate={[requiredField, maxLength25]} element='input' component={fieldCreator} name='login' placeholder='Login'/>
			</div>
			<div className={classes.row}>
				<Field validate={[requiredField, maxLength25]} element='input' component={fieldCreator} type='password' name='password' placeholder='Password'/>
			</div>
			<div className={classes.checkbox}>
				<Field id='checkbox' component='input' type='checkbox' name='remember' placeholder='Password'/>
				<label htmlFor='checkbox'>Remember me</label>
			</div>
			<button type='submit' className={classes.button}>Log in</button>
		</form>
	);
}


LoginForm = reduxForm({
	form: 'login'
})(LoginForm)


export default LoginForm;