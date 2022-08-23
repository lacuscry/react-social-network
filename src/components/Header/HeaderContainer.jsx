import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {autoLoginThunk, logoutThunk} from '../../Redux/auth-reducer';
import {compose} from 'redux';


class HeaderContainer extends React.Component{
	componentDidMount(){
		this.props.autoLoginThunk();
	}

	logout = () => {
		this.props.logoutThunk();
	}

	render(){
		return(
			<Header logout={this.logout} {...this.props}/>
		)
	}
}


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});


export default compose(
	connect(mapStateToProps, {autoLoginThunk, logoutThunk})
)(HeaderContainer);