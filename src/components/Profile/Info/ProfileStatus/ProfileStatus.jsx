import React from 'react';
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component{
	state = {
		editMode: false,
		status: this.props.status
	};

	
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
			<div className={classes.status}>
				{this.state.editMode
					? <input onChange={status => this.onChangeStatus(status)} onBlur={this.deactivateEditMode} value={this.state.status} className={classes.edit} autoFocus/>	
					: <div onClick={this.activateEditMode} className={classes.result}>{this.props.status || 'No status'}</div>	
				}
			</div>
		)
	}
}


export default ProfileStatus;