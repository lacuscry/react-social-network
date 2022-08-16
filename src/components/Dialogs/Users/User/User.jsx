import classes from './User.module.css';
import {NavLink} from 'react-router-dom';


function User(props){
	function onChangeDialog(id){
		props.onChangeDialog(id);
	}

	return(
		<NavLink onClick={() => onChangeDialog(props.id)} className={navData => navData.isActive ? `${classes.user} ${classes.active}` : classes.user} to={`/dialogs/${props.id}`}>
			<img src={props.img} alt="Image"/>
			<div className={classes.name}>{props.name}</div>
		</NavLink>
	)
}


export default User;