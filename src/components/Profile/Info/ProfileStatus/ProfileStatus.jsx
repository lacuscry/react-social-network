import React from 'react';
import ProfileStatusForm from './ProfileStatusForm/ProfileStatusForm';


class ProfileStatus extends React.Component{
	state = {
		editMode: false,
		status: this.props.status
	};


	componentDidUpdate = prevProps => {
		if(this.props.status !== prevProps.status){
			this.setState({
				status: this.props.status
			});
		}
	}
	

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});

		this.props.updateStatusThunk(this.state.status);
	};
	
	onChangeStatus = status => {
		this.setState({
			status: status.target.value
		});
	};
	

	render(){
		return(
			<ProfileStatusForm onSubmit={this.deactivateEditMode} storeStatus={this.props.status} localStatus={this.state} activateEditMode={this.activateEditMode} deactivateEditMode={this.deactivateEditMode} onChangeStatus={this.onChangeStatus}/>
		)
	}
}


export default ProfileStatus;