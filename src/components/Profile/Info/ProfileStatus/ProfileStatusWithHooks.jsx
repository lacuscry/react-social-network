import React from 'react';
import {useState, useEffect} from 'react';
import ProfileStatusForm from './ProfileStatusForm/ProfileStatusForm';


function ProfileStatusWithHooks(props){
	let [editMode, setEditMode] = useState(false);

	let [status, setStatus] = useState(props.status);

	
	useEffect(() => {
    	setStatus(props.status);
	},[props.status]);

	
	function activateMode(){
		setEditMode(true);
	} 

	function deactivateMode(){
		setEditMode(false);

		props.updateStatusThunk(status);
	} 

	function changeStatus(status){
		setStatus(status.target.value);
	}
	

	return(
		<ProfileStatusForm editMode={editMode} storeStatus={props.status} hookStatus={status} activateEditMode={activateMode} deactivateEditMode={deactivateMode} onChangeStatus={changeStatus}/>
	)
}


export default ProfileStatusWithHooks;