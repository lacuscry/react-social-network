import './App.css';
import React, {Suspense} from 'react';
import {connect, Provider} from 'react-redux';
import store from './Redux/redux-store';
import {compose} from 'redux';
import {Routes, Route, HashRouter} from 'react-router-dom';
import {initializeApp} from './Redux/app-reducer';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Preloader from './components/common/Preloader/Preloader';
import withRouter from './components/common/withRouter/withRouter';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));


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
					<Suspense fallback={<Preloader/>}>
						<Routes>
							<Route path="/profile/" element={<ProfileContainer/>}/>
							<Route path="/profile/:userId" element={<ProfileContainer/>}/>
      		        		<Route path="/dialogs/*" element={<DialogsContainer/>}/>
							<Route path="/login" element={<LoginPage/>}/>
      		        		<Route path="/users" element={<UsersContainer/>}/>
						</Routes>
					</Suspense>
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
			<HashRouter>
				<Provider store={store}>
					<AppContainer/>
				</Provider>
			</HashRouter> 
		</React.StrictMode>
	)
}


export default MainApp;