import classes from './Messages.module.css';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';


function Messages(props){
	const messagesList = props.dialogs.map(message => <Message user={message} currentDialog={props.currentDialog}  message={message.messages} key={message.id}/>);


	return(
		<div className={classes.messages}>
			<div className={classes.messages_wrapper}>
				{props.dialogs[props.currentDialog] && props.dialogs[props.currentDialog].messages.length
				? messagesList 
				: <div className={classes.no_messages}>You have not messages</div>}
			</div>
			<MessageForm onSubmit={props.sendMessage}/>
		</div>
	)
}


export default Messages;