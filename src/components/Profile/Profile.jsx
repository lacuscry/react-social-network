import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import InfoContainer from './Info/InfoContainer';


function Profile({getStatusThunk, updateStatusThunk, isOwner, savePhotoThunk}){
	return(
		<main className={classes.profile}>
			<div className='container'>
				<InfoContainer getStatusThunk={getStatusThunk} updateStatusThunk={updateStatusThunk} isOwner={isOwner} savePhotoThunk={savePhotoThunk}/>
				<PostsContainer/>
			</div>
		</main>
	)
}


export default Profile;