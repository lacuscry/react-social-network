import './Message.css';


function Message(props){
	const messagesList = props.message.map((message,i) => <div className={`message ${message.whose}`} key={i}>{message.text}</div>);


	return(
		<div>
			{messagesList}
		</div>
	)
}


export default Message;