import React from 'react';
import {useState, useEffect} from 'react';
import ProfileStatusForm from './ProfileStatusForm/ProfileStatusForm';


function ProfileStatusWithHooks({status, updateStatusThunk}){
	let [editMode, setEditMode] = useState(false);

	let [localStatus, setStatus] = useState(status);

	
	useEffect(() => {
    	setStatus(status);
	},[status]);

	
	function activateMode(){
		setEditMode(true);
	} 

	function deactivateMode(){
		setEditMode(false);

		updateStatusThunk(localStatus);
	} 

	function changeStatus(status){
		setStatus(status.target.value);
	}
	

	return(
		<ProfileStatusForm editMode={editMode} storeStatus={status} localStatus={localStatus} activateEditMode={activateMode} deactivateEditMode={deactivateMode} onChangeStatus={changeStatus}/>
	)
}


export default ProfileStatusWithHooks;