import React from "react";
import {connect} from 'react-redux';
import {getProfileThunk} from '../../Redux/profile-reducer';
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
	componentDidMount(){
		let userId = this.props.router.params.userId;
	
		this.props.getProfileThunk(userId);
	}

	
	render (){
		return(
			<Profile {...this.props}/>
		)
	} 
}


const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	defaultInfo: state.profilePage.defaultInfo
});


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


export default compose(
	connect(mapStateToProps, {getProfileThunk}),
	// withAuthRedirect,
	withRouter
)(ProfileContainer);