import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import InfoContainer from './Info/InfoContainer';


function Profile(props){
	return(
		<main className={classes.profile}>
			<div className='container'>
				<InfoContainer  getStatusThunk={props.getStatusThunk} updateStatusThunk={props.updateStatusThunk}/>
				<PostsContainer/>
			</div>
		</main>
	)
}


export default Profile;