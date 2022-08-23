import Messages from './Messages';
import {connect} from 'react-redux';
import React from 'react';
import {sendMessage} from '../../../Redux/dialogs-reducer';


class MessagesContainer extends React.Component{
	sendMessage = formData => {
		this.props.sendMessage(formData);
	}


	render() {
		return(
			<Messages sendMessage={this.sendMessage} state={this.props.state}/>
		)
	};
}


function mapStateToProps(state){
	return{
		state: state.dialogsPage
	};
}


export default connect(mapStateToProps, {sendMessage})(MessagesContainer);