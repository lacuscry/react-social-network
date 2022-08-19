import classes from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';


function Dialogs(props){
	return(
		<div id='dialogs' className={classes.dialogs}>
			<div className='container'>
				<h2 className={classes.title}>Messages</h2>
				<UsersContainer/>
				<MessagesContainer/>
			</div>
		</div>
	)
}


export default Dialogs;