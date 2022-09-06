import React from "react";
import {connect} from 'react-redux';
import {getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk} from '../../Redux/profile-reducer';
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import withRouter from "../common/withRouter/withRouter";


class ProfileContainer extends React.Component{
	refreshProfile() {
		let userId = this.props.router.params.userId;

		if(!userId){
			userId = this.props.authorizedUserId || 25369;
		}

		this.props.getProfileThunk(userId);
		
		this.props.getStatusThunk(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps){
		if(prevProps.router.params.userId != this.props.router.params.userId){
			this.refreshProfile();
		}
	}
	
	
	render() {
		return(
			<Profile isOwner={!this.props.router.params.userId} {...this.props}/>
		)
	} 
}


const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.userId
});


export default compose(
	connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk}),
	withAuthRedirect,
	withRouter
)(ProfileContainer);