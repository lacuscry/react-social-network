import React from "react";
import {connect} from 'react-redux';
import {getProfileThunk, getStatusThunk, updateStatusThunk} from '../../Redux/profile-reducer';
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
	componentDidMount() {
		let userId = this.props.router.params.userId;

		this.props.getProfileThunk(userId);
		
		this.props.getStatusThunk(userId);
	}

	
	render() {
		return(
			<Profile {...this.props}/>
		)
	} 
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

		
        return (
            <Component {...props} router={{location, navigate, params}}/>
        );
    }


    return ComponentWithRouterProp;
}


const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	authorizedUserId: state.auth.userId
});


export default compose(
	connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
	// withAuthRedirect,
	withRouter
)(ProfileContainer);