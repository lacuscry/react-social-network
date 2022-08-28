import {profileAPI} from "../api/api";


const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_PROFILE = 'profile/SET-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';


const initialState = {
	posts: [
		{
			text: "Hi everyone",
			img: null,
			likes: 1
		},
		{
			text: "I'm tired",
			img: null,
			likes: 5
		},
		{
			text: "It's me",
			img: 'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=',
			likes: 10
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
	profile: null,
	status: ''
};


function profileReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST: {

			return {
				...state,
				posts: [...state.posts,{
					text: action.text,
					img: action.img,
					likes: 0
				}],
			};
		}

		case DELETE_POST: {
			const newState = {
				...state,
				...state.posts,	
			};

			state.posts.splice(action.postId, 1);

			return newState;
		}

		case SET_PROFILE: {

			return {
				...state,
				profile: action.profile
			};
		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}

		default:

			return state;
	}
}


export const addPost = formData => ({
	type: ADD_POST,
	text: formData.postText,
	img: null
});

export const deletePost = postId => ({
	type: DELETE_POST,
	postId
});

export const setProfile = profile => ({
	type: SET_PROFILE,
	profile
});

export const setStatus = status => ({
	type: SET_STATUS,
	status
});


export const getProfileThunk = userId => async dispatch => {
	const response = await profileAPI.setProfile(userId);

	dispatch(setProfile(response.data));
};

export const getStatusThunk = userId => async dispatch => {
	const response = await profileAPI.getStatus(userId);
	
	dispatch(setStatus(response.data));
};

export const updateStatusThunk = status => async dispatch => {
	const response = await profileAPI.updateStatus(status);
	
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};


export default profileReducer;