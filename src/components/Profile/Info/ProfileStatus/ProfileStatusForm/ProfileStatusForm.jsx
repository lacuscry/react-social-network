import classes from './ProfileStatusForm.module.css';
import {reduxForm, Field} from 'redux-form';


function ProfileStatusForm(props){
	return(
		<form onSubmit={props.handleSubmit} className={classes.status}>
			{props.state.editMode
				? <Field onChange={status => props.onChangeStatus(status)} onBlur={props.deactivateEditMode} value={props.state.status} name='status' component='input' className={classes.edit} autoFocus/>	
				: <div onClick={props.activateEditMode} className={classes.result}>{props.status || 'No status'}</div>	
			}
		</form>
	)
}


ProfileStatusForm = reduxForm({
	form: 'status',
})(ProfileStatusForm);


export default ProfileStatusForm;