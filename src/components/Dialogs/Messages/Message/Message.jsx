import './Message.css';


function Message({message, currentDialog, user}){
	const messagesList = message.map((message, i) => currentDialog === user.id - 1 && <div className={`message ${message.whose}`} key={i}>{message.text}</div>);


	return(
		<div>
			{messagesList}
		</div>
	)
}


export default Message;