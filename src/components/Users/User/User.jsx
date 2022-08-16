import classes from './User.module.css';
import {NavLink} from 'react-router-dom';


function User(props){
	function onChangeFollowing(status, id){
		props.toggleFollowing(id, status); 
	}

	
	return(
		<div className={classes.user}>
			<div className={classes.preview}>
				<NavLink to={`/profile/${props.user.id}`}>
					<img className={classes.photo} src={props.user.photos.small ? props.user.photos.small : props.defaultInfo.profilePhoto} alt="Photo"/>
				</NavLink>
				<button onClick={() => onChangeFollowing(props.user.followed, props.user.id)} className={classes.button}>
					{props.user.followed ? 'Unfollow' : 'Follow'}
				</button>
			</div>
			<div className={classes.info}>
				<div className={classes.bio}>
					<div className={classes.name}>{props.user.name}</div>
					<div className={classes.location}>
						<div>{props.defaultInfo.location.city}</div>
						<div>{props.defaultInfo.location.country}</div>
					</div>
				</div>
				<div className={classes.status}>{props.user.status ? props.user.status : props.defaultInfo.status}</div>
			</div>
		</div>
	)
}


export default User;