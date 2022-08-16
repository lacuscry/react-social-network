import classes from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';


function Posts(props){
	const postsList = props.posts.map((post,i) => <Post profilePhoto={props.photo} post={post} key={i}/>);

	function addPost(){
		props.addPost(null);
	}

	function onPostChange(text){
		props.updateNewPost(text);
	}

	
	return(
		<div className={classes.posts}>
			<form className={classes.form}>
				<textarea value={props.newPostText} onChange={(e) => onPostChange(e.target.value)} className={classes.textarea}/>
				<button type='button' onClick={addPost} className={classes.button}>Send</button>
			</form>
			<div className={classes.title}>My posts</div>
			<div className={classes.old_posts}>
				{postsList}
			</div>
		</div>
	)
}


export default Posts;