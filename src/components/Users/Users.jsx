import User from "./User/User";
import classes from './Users.module.css';


function Users(props){
	const userList = props.users.map(user => <User toggleFollowing={props.toggleFollowing} follow={props.follow} unfollow={props.unfollow} user={user} defaultInfo={props.defaultInfo} key={user.id}/>)

	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	
	let pages = [];
	
	for (let i = 1; i <= pagesCount; i++) {
		if(i <= 10){
			pages.push(i);
		}
	}


	return(
		<main>
			<div className={'container'}>
				<div className={classes.buttons}>
					{pages.map(page => <button onClick={() => props.onChangeSelectedPage(page)} className={props.selectedPage === page ? `${classes.selected} ${classes.button}` : classes.button} key={page}>{page}</button>)}
				</div>
				{userList}
			</div>
		</main>
	);
}


export default Users;