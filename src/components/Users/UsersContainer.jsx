import React from 'react';
import {connect} from 'react-redux';
import {setUsers, setTotalUsersCount, toggleFollowing, changeSelectedPage, toggleIsFetching} from '../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component{
	componentDidMount(){
		this.props.toggleIsFetching(true);

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
			
			this.props.toggleIsFetching(false);

			this.props.setUsers(response.data.items);
			
			this.props.setTotalUsersCount([response.data.totalCount]);
		});
	}
	
	onChangeSelectedPage = page => {
		this.props.changeSelectedPage(page);

		this.props.toggleIsFetching(true);

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);

			this.props.setUsers(response.data.items);
		});
	}

	
	render(){		
		return(
			<>{
				this.props.isFetching ? <Preloader/> :
				<Users onChangeSelectedPage={this.onChangeSelectedPage} toggleFollowing={this.props.toggleFollowing} defaultInfo={this.props.defaultInfo} isFetching={this.props.isFetching} totalUsersCount={this.props.totalUsersCount} users={this.props.users} pageSize={this.props.pageSize} selectedPage={this.props.selectedPage}/>
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
		isFetching: state.usersPage.isFetching
	};
}


export default connect(mapStateToProps, {setUsers, setTotalUsersCount, toggleFollowing, changeSelectedPage, toggleIsFetching})(UsersContainer);