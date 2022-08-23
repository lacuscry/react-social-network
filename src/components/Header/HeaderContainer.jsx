import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {autoLoginThunk} from '../../Redux/auth-reducer';
import {compose} from 'redux';


class HeaderContainer extends React.Component{
	componentDidMount(){
		this.props.autoLoginThunk();
	}


	render(){
		return(
			<Header {...this.props}/>
		)
	}
}


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});


export default compose(
	connect(mapStateToProps, {autoLoginThunk})
)(HeaderContainer);