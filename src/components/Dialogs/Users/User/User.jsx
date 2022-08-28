import classes from './User.module.css';
import {NavLink} from 'react-router-dom';


function User({onChangeDialog, id, img, name}){
	return(
		<NavLink onClick={() => onChangeDialog(id)} className={navData => navData.isActive ? `${classes.user} ${classes.active}` : classes.user} to={`/dialogs/${id}`}>
			<img src={img} alt="Image"/>
			<div className={classes.name}>{name}</div>
		</NavLink>
	)
}


export default User;