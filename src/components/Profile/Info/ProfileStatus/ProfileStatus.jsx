import React from 'react';
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component{
	state = {
		editMode: false,
		status: window.localStorage.getItem('status')
	}
	

	onChangeStatus(text) {
		this.setState({
			status: window.localStorage.setItem('status', text.target.value)
		});
	}

	activateEditMode() {
		this.setState({
			editMode: true
		});
	}

	deactivateEditMode() {
		this.setState({
			editMode: false
		});
	}
	

	render(){
		return(
			<div className={classes.status}>
				{this.state.editMode
					? <input onBlur={this.deactivateEditMode.bind(this)} onInput={text => this.onChangeStatus(text)} value={this.state.status} className={classes.edit} autoFocus type="text"/>	
					: <div onDoubleClick={this.activateEditMode.bind(this)} className={classes.result}>{window.localStorage.getItem('status')}</div>	
				}
			</div>
		)
	}
}


export default ProfileStatus;