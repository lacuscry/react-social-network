import './App.css';
import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/Login';


function App() {
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
	);
}


export default App;