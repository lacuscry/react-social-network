import classes from './User.module.css';
import {NavLink} from 'react-router-dom';


function User({toggleFollowing, user, defaultInfo, followingInProgress}){
	return(
		<div className={classes.user}>
			<div className={classes.preview}>
				<NavLink to={`/profile/${user.id}`}>
					<img className={classes.photo} src={user.photos.small ? user.photos.small : defaultInfo.profilePhoto} alt="Photo"/>
				</NavLink>
				<button disabled={followingInProgress === user.id} onClick={() => toggleFollowing(user.id, user.followed)} className={classes.button}>
					{user.followed ? 'Unfollow' : 'Follow'}
				</button>
			</div>
			<div className={classes.info}>
				<div className={classes.bio}>
					<div className={classes.name}>{user.name}</div>
					<div className={classes.location}>
						<div>{defaultInfo.location.city}</div>
						<div>{defaultInfo.location.country}</div>
					</div>
				</div>
				<div className={classes.status}>{user.status ? user.status : defaultInfo.status}</div>
			</div>
		</div>
	)
}


export default User;