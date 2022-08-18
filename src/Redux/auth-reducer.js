import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET-USER-DATA';


const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};


function authReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data
			};
		}


		default:

			return state;
	}
}


export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	data: {
		userId,
		email,
		login,
		isAuth
	}
});


export const loginThunk = () => dispatch => {
	authAPI.login().then(data => {
		if(data.resultCode === 0){
			let {id, email, login} = data.data;
		
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
};


export default authReducer;