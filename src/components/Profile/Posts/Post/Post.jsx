import classes from './Post.module.css';


function Post(props){
	return(
		<div className={classes.post}>
			<img className={classes.photo} src={props.profilePhoto} alt="Image"/>
			<p>{props.post.text}</p>
			<img className={classes.image} src={props.post.img} alt="Image"/>
			<div className={classes.likes}>{props.post.likes} likes</div> 
		</div>
	)	
}


export default Post;