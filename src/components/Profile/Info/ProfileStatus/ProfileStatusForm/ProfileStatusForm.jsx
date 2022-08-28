import classes from './ProfileStatusForm.module.css';


function ProfileStatusForm({editMode, onChangeStatus, localStatus, storeStatus, deactivateEditMode, activateEditMode}){
	return(
		<form className={classes.status}>
			{editMode
				? <input onChange={onChangeStatus} value={localStatus} onBlur={deactivateEditMode} name='status' className={classes.edit} autoFocus/>	
				: <div onClick={activateEditMode} className={classes.result}>{storeStatus || 'No status'}</div>	
			}
		</form>
	)
}


export default ProfileStatusForm;