import classes from './ProfileStatusForm.module.css';
import {reduxForm, Field} from 'redux-form';


function ProfileStatusForm(props){
	return(
		<form onSubmit={props.handleSubmit} className={classes.status}>
			{props.editMode
				? <Field onChange={props.onChangeStatus} value={props.hookStatus} onBlur={props.deactivateEditMode} name='status' component='input' className={classes.edit} autoFocus/>	
				: <div onClick={props.activateEditMode}  className={classes.result}>{props.storeStatus || 'No status'}</div>	
			}
		</form>
	)
}


ProfileStatusForm = reduxForm({
	form: 'status',
})(ProfileStatusForm);


export default ProfileStatusForm;