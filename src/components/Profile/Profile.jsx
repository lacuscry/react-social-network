import classes from './Profile.module.css';
import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';


function Profile(props){
	return(
		<main className={classes.profile}>
			<div className='container'>
				<Info defaultInfo={props.defaultInfo} profile={props.profile}/>
				<PostsContainer/>
			</div>
		</main>
	)
}


export default Profile;