import React from 'react';
import {connect} from 'react-redux';
import {setUsers, setTotalUsersCount, toggleFollowingUser, changeSelectedPage, toggleIsFetching, toggleIsFollowingProgress} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {userAPI} from '../../api/api';


class UsersContainer extends React.Component{
	componentDidMount(){
		this.props.toggleIsFetching(true);

		userAPI.getUsers(this.props.selectedPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);

			this.props.setUsers(data.items);
			
			this.props.setTotalUsersCount([data.totalCount]);
		});
	}
	
	onChangeSelectedPage = page => {
		this.props.changeSelectedPage(page);

		this.props.toggleIsFetching(true);

		userAPI.getUsers(page, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			
			this.props.setUsers(data.items);
		});
	}

	changeFollowingState = (userId, status) => {
		this.props.toggleIsFollowingProgress(userId);

		if(status){
			userAPI.deleteFollowUser(userId).then(data => {
				if (data.resultCode === 0){
					this.props.toggleFollowingUser(userId, status);

					this.props.toggleIsFollowingProgress(null);
				}
			});
		} else {
			userAPI.postFollowUser(userId).then(data => {
				if (data.resultCode === 0){
					this.props.toggleFollowingUser(userId, status);
		
					this.props.toggleIsFollowingProgress(null);
				}
			});
		}
	}


	render(){		
		return(
			<>{
				this.props.isFetching ? <Preloader/> :
				<Users followingInProgress={this.props.followingInProgress} toggleIsFollowingProgress={this.toggleIsFollowingProgress} toggleFollowing={this.changeFollowingState} onChangeSelectedPage={this.onChangeSelectedPage} defaultInfo={this.props.defaultInfo} isFetching={this.props.isFetching} totalUsersCount={this.props.totalUsersCount} users={this.props.users} pageSize={this.props.pageSize} selectedPage={this.props.selectedPage}/>
			}</>
		)
	}
}


function mapStateToProps(state){
	return{
		defaultInfo: state.usersPage.defaultInfo,
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		selectedPage: state.usersPage.selectedPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	};
}


export default connect(mapStateToProps, {setUsers, setTotalUsersCount, toggleFollowingUser, changeSelectedPage, toggleIsFetching, toggleIsFollowingProgress})(UsersContainer);