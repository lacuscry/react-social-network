import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


function Users({users, followingInProgress, toggleFollowing, defaultInfo, onChangeSelectedPage, totalUsersCount, pageSize, portionSize, selectedPage}){
	const userList = users.map(user => <User followingInProgress={followingInProgress} toggleFollowing={toggleFollowing} user={user} defaultInfo={defaultInfo} key={user.id}/>)


	return(
		<main>
			<div className={'container'}>
				<Paginator onChangeSelectedPage={onChangeSelectedPage} totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={portionSize} selectedPage={selectedPage}/>
				{userList}
			</div>
		</main>
	);
}


export default Users;