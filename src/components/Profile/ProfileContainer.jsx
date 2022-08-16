import React from "react";
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setProfile} from '../../Redux/profile-reducer';
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component{
	componentDidMount(){
		let userId = this.props.router.params.userId;
		
		if(!userId){
			userId = 2;
		}
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setProfile(response.data);
		});
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


export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));