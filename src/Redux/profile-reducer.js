import {
	userAPI
} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';


const initialState = {
	newPostText: "What's new?",
	posts: [{
			text: "It's me",
			img: 'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=',
			likes: 10
		},
		{
			text: "I'm tired",
			img: null,
			likes: 5
		},
		{
			text: "Hi everyone",
			img: null,
			likes: 1
		}
	],
	defaultInfo: {
		fullName: 'Tim Avezov',
		age: '22 y.o',
		city: 'Moscow, Russia',
		job: 'Front-end Developer',
		bg: 'https://img.freepik.com/free-photo/cryptocurrency-coding-digital-blue-background-open-source-blockchain-concept_53876-124644.jpg?w=2000',
		photos: {
			large: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
			small: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
		}
	},
	profile: null
};


function profileReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST: {

			return {
				...state,
				posts: [{
					text: state.newPostText,
					img: action.img,
					likes: 0
				}, ...state.posts],
				newPostText: ''
			};
		}

		case UPDATE_NEW_POST: {

			return {
				...state,
				newPostText: action.post
			};
		}

		case SET_PROFILE: {

			return {
				...state,
				profile: action.profile
			};
		}

		default:

			return state;
	}
}


export const addPost = (img) => ({
	type: ADD_POST,
	img: img
});

export const updateNewPost = (text) => ({
	type: UPDATE_NEW_POST,
	post: text
});

export const setProfile = (profile) => ({
	type: SET_PROFILE,
	profile
});


export const getProfileThunk = userId => {
	return dispatch => {
		userAPI.setProfile(userId).then(data => {
			dispatch(setProfile(data));
		});
	};
};


export default profileReducer;