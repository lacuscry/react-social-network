import classes from './ProfileStatusForm.module.css';


function ProfileStatusForm(props){
	return(
		<form className={classes.status}>
			{props.editMode
				? <input onChange={props.onChangeStatus} value={props.hookStatus} onBlur={props.deactivateEditMode} name='status'  className={classes.edit} autoFocus/>	
				: <div onClick={props.activateEditMode}  className={classes.result}>{props.storeStatus || 'No status'}</div>	
			}
		</form>
	)
}


export default ProfileStatusForm;