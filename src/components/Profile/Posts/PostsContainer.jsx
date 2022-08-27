import Posts from './Posts';
import {connect} from 'react-redux';
import {addPost} from '../../../Redux/profile-reducer';
import React from 'react';


class PostsContainer extends React.Component{
	addPost = formData => {
		this.props.addPost(formData);
	}

	
	render(){
		return(
			<Posts {...this.props}/>
		)
	}
}


function mapStateToProps(state){
	return{
		posts: state.profilePage.posts,
		photo: state.profilePage.photo,
		defaultPhoto: state.profilePage.defaultInfo.photos.small
	};
}


export default connect(mapStateToProps, {addPost})(PostsContainer);