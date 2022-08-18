import React from "react";
import {connect} from 'react-redux';
import {getProfileThunk} from '../../Redux/profile-reducer';
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component{
	componentDidMount(){
		let userId = this.props.router.params.userId;
	
		this.props.getProfileThunk(userId);
	}

	
	render(){
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


export default connect(mapStateToProps, {getProfileThunk})(withRouter(ProfileContainer));