import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Routes, Route} from 'react-router-dom';
import {initializeApp} from './Redux/app-reducer';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import withRouter from './components/common/withRouter/withRouter';


import store from './Redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


class App extends React.Component {
	componentDidMount(){
		this.props.initializeApp();
	}


	render(){
		if(!this.props.initialized){
			return <Preloader/>
		}

		
		return (
			<div className='wrapper'>
				<HeaderContainer/>
				<Nav/>
				<div className='content'>
					<Routes>
						<Route path="/profile/" element={<ProfileContainer/>}/>
						<Route path="/profile/:userId" element={<ProfileContainer/>}/>
      		        	<Route path="/dialogs/*" element={<DialogsContainer/>}/>
						<Route path="/login" element={<LoginPage/>}/>
      		        	<Route path="/users" element={<UsersContainer/>}/>
					</Routes>
				</div>
				<Footer/>
	  		</div>
		)
	}
}


const mapStateToProps = state => ({
	initialized: state.app.initialized
});


const AppContainer = compose(
	withRouter, 
	connect(mapStateToProps,{initializeApp})
)(App);


const MainApp = () => {
	return(	
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<AppContainer/>
				</Provider>
			</BrowserRouter> 
		</React.StrictMode>
	)
}


export default MainApp;