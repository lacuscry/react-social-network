import './Message.css';


function Message(props){
	const messagesList = props.message.map((message, i) =>	props.currentDialog === props.user.id - 1 && <div className={`message ${message.whose}`} key={i}>{message.text}</div>);


	return(
		<div>
			{messagesList}
		</div>
	)
}


export default Message;