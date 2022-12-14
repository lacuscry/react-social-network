import classes from './Users.module.css';
import User from './User/User';


function Users({state, changeCurrentDialog}){
	const usersList = state.dialogs.map((user, i) => <User onChangeDialog={changeCurrentDialog} key={i} id={i} img={user.img} name={user.name}/>);


	return(
		<div className={classes.users}>
			{usersList}
		</div>
	)
}


export default Users;