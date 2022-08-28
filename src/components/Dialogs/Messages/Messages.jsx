import classes from './Messages.module.css';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';


function Messages({dialogs, currentDialog, sendMessage}){
	const messagesList = dialogs.map(message => <Message user={message} currentDialog={currentDialog}  message={message.messages} key={message.id}/>);


	return(
		<div className={classes.messages}>
			<div className={classes.messages_wrapper}>
				{dialogs[currentDialog] && dialogs[currentDialog].messages.length
				? messagesList 
				: <div className={classes.no_messages}>You have not messages</div>}
			</div>
			<MessageForm onSubmit={sendMessage}/>
		</div>
	)
}


export default Messages;