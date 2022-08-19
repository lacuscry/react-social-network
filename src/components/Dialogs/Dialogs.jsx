import classes from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';
import {Navigate} from "react-router-dom";


function Dialogs(props){
	if(!props.isAuth){
		return <Navigate to={'/login'}/>
	};


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