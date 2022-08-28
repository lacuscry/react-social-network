import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import InfoContainer from './Info/InfoContainer';


function Profile({getStatusThunk, updateStatusThunk}){
	return(
		<main className={classes.profile}>
			<div className='container'>
				<InfoContainer getStatusThunk={getStatusThunk} updateStatusThunk={updateStatusThunk}/>
				<PostsContainer/>
			</div>
		</main>
	)
}


export default Profile;