import classes from './Messages.module.css';
import React from 'react';
import Message from './Message/Message';


function Messages(props){
	const messagesList = props.state.dialogs.map(message => <Message message={message.messages} key={message.id}/>);

	function sendMessage(){
		props.sendMessage(props.state.currentTextMessage);
	}

	function onChangeMessage(text){
		props.changeCurrentTextMessage(text);
	}

	
	return(
		<div className={classes.messages}>
			<div className={classes.messages_wrapper}>
				{messagesList}
			</div>
			<form className={classes.form}>
				<textarea value={props.state.currentTextMessage} onChange={(e) => onChangeMessage(e.target.value)} type="text" required/>
				<button onClick={sendMessage} type='button'>Send</button>
			</form>
		</div>
	)
}


export default Messages;