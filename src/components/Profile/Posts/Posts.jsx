import classes from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';


function Posts(props){
	const postsList = props.posts.map((post,i) => <Post defaultPhoto={props.defaultPhoto} profilePhoto={props.photo} post={post} key={i}/>);


	return(
		<div className={classes.posts}>
			<PostForm onSubmit={props.addPost}/>
			<div className={classes.title}>My posts</div>
			<div className={classes.old_posts}>
				{postsList}
			</div>
		</div>
	)
}


export default Posts;