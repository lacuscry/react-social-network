import Info from "./Info";
import {connect} from 'react-redux';
import React from "react";


class InfoContainer extends React.Component{
	render(){
		return(
			<Info {...this.props}/>
		)
	}
}


function mapStateToProps(state){
	return{
		profile: state.profilePage.profile,
		defaultInfo: state.profilePage.defaultInfo,
		status: state.profilePage.status
	};
}


export default connect(mapStateToProps)(InfoContainer);