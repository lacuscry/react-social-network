import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';


function Nav(){
	return(
		<nav className={classes.nav}>
			<ul className={classes.list}>
				<li><NavLink to="/profile" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>Profile</NavLink></li>
				<li><NavLink to="/dialogs" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>Dialogs</NavLink></li>
				<li><NavLink to="/friends" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>Friends</NavLink></li>
				<li><NavLink to="/users" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>Users</NavLink></li>
				<li><NavLink to="/news" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>News</NavLink></li>
				<li><NavLink to="/music" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>Music</NavLink></li>
				<li><NavLink to="/settings" className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link}>Settings</NavLink></li>
			</ul>
		</nav>
	)
}


export default Nav;