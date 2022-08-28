import classes from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';


function Posts({posts, addPost, defaultPhoto, photo}){
	const postsList = posts.map((post, i) => <Post defaultPhoto={defaultPhoto} profilePhoto={photo} post={post} key={i}/>);


	return(
		<div className={classes.posts}>
			<PostForm onSubmit={addPost}/>
			<div className={classes.title}>My posts</div>
			<div className={classes.old_posts}>
				{postsList}
			</div>
		</div>
	)
}


export default Posts;