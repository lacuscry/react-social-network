import './App.css';
import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';


function App() {
	return (
		<div className='wrapper'>
			<HeaderContainer/>
			<Nav/>
			<div className='content'>
				<Routes>
					<Route path="/profile/" element={<ProfileContainer/>}/>
					<Route path="/profile/:userId" element={<ProfileContainer/>}/>
      		        <Route path="/dialogs/*" element={<Dialogs/>}/>
      		        <Route path="/users" element={<UsersContainer/>}/>
				</Routes>
			</div>
			<Footer/>
	  	</div>
	);
}


export default App;