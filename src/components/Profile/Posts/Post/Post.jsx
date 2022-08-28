import classes from './Post.module.css';


function Post({post, profilePhoto, defaultPhoto}){
	return(
		<div className={classes.post}>
			<img className={classes.photo} src={profilePhoto || defaultPhoto} alt="Image"/>
			<p>{post.text}</p>
			<img className={classes.image} src={post.img} alt="Image"/>
			<div className={classes.likes}>{post.likes} likes</div> 
		</div>
	)	
}


export default Post;