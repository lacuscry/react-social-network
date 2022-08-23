import classes from './Messages.module.css';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';


function Messages(props){
	const messagesList = props.state.dialogs.map(message => <Message message={message.messages} key={message.id}/>);


	return(
		<div className={classes.messages}>
			<div className={classes.messages_wrapper}>
				{messagesList}
			</div>
			<MessageForm onSubmit={props.sendMessage}/>
		</div>
	)
}


export default Messages;