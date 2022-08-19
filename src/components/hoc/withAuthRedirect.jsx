import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux/es/exports";


const mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});


export const withAuthRedirect = Component => {
	class RedirectComponent extends React.Component{
		render(){
			return !this.props.isAuth ? <Navigate to={'/login'}/> : <Component {...this.props}/>
		}
	}


	const connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


	return connectedAuthRedirectComponent;
};