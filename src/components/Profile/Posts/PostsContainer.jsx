import Posts from './Posts';
import {addPost, updateNewPost} from '../../../Redux/profile-reducer';
import {connect} from 'react-redux';


function mapStateToProps(state){
	return{
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
		photo: state.profilePage.photo
	};
}


const PostsContainer = connect(mapStateToProps, {addPost, updateNewPost})(Posts);


export default PostsContainer;