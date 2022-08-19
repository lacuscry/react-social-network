import React from 'react';
import {connect} from 'react-redux';
import {getUsersThunk, changePageThunk, changeFollowingStateThunk, toggleIsFollowingProgress} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../hoc/withAuthRedirect';


class UsersContainer extends React.Component{
	componentDidMount(){
		this.props.getUsersThunk(this.props.selectedPage, this.props.pageSize);
	}
	
	onChangeSelectedPage = page => {
		this.props.changePageThunk(page, this.props.pageSize);
	}

	changeFollowingState = (userId, status) => {
		this.props.changeFollowingStateThunk(userId, status);
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


const withRedirect = withAuthRedirect(UsersContainer);


export default connect(mapStateToProps, {getUsersThunk, changePageThunk, changeFollowingStateThunk, toggleIsFollowingProgress})(withRedirect);