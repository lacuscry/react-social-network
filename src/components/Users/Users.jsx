import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


function Users({users, followingInProgress, toggleIsFollowingProgress, toggleFollowing, follow, unfollow, defaultInfo, onChangeSelectedPage, totalUsersCount, pageSize, selectedPage}){
	const userList = users.map(user => <User followingInProgress={followingInProgress} toggleIsFollowingProgress={toggleIsFollowingProgress} toggleFollowing={toggleFollowing} follow={follow} unfollow={unfollow} user={user} defaultInfo={defaultInfo} key={user.id}/>)


	return(
		<main>
			<div className={'container'}>
				<Paginator onChangeSelectedPage={onChangeSelectedPage} totalUsersCount={totalUsersCount} pageSize={pageSize} selectedPage={selectedPage}/>
				{userList}
			</div>
		</main>
	);
}


export default Users;