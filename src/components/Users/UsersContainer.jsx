import React from 'react';
import {connect} from 'react-redux';
import {getUsersThunk, changePageThunk, changeFollowingStateThunk, toggleIsFollowingProgress} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getDefaultInfo, getUsers, getPageSize, getSelectedPage, getTotalUsersCount, getStatusFetching, getFollowingProgress} from '../../Redux/users-selectors';


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
		defaultInfo: getDefaultInfo(state),
		users: getUsers(state),
		pageSize: getPageSize(state),
		selectedPage: getSelectedPage(state),
		totalUsersCount: getTotalUsersCount(state),
		isFetching: getStatusFetching(state),
		followingInProgress: getFollowingProgress(state)
	};
}


export default compose(
	connect(mapStateToProps, {getUsersThunk, changePageThunk, changeFollowingStateThunk, toggleIsFollowingProgress}),
	withAuthRedirect
)(UsersContainer);