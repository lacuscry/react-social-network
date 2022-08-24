import React from "react";
import {connect} from 'react-redux';
import {getProfileThunk, getStatusThunk, updateStatusThunk} from '../../Redux/profile-reducer';
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import withRouter from "../common/withRouter/withRouter";


class ProfileContainer extends React.Component{
	componentDidMount() {
		let userId = this.props.router.params.userId;

		if(!userId){
			userId = this.props.authorizedUserId || 25369;
		}

		this.props.getProfileThunk(userId);
		
		this.props.getStatusThunk(userId);
	}

	
	render() {
		return(
			<Profile {...this.props}/>
		)
	} 
}


const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.userId
});


export default compose(
	connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
	withAuthRedirect,
	withRouter
)(ProfileContainer);