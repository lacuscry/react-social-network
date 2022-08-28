import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";


const SET_USER_DATA = 'auth/SET-USER-DATA';


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
	data: {userId, email, login, isAuth}
});


export const autoLoginThunk = () => async dispatch => {
	const response = await authAPI.autoLogin();
	
	if (response.data.resultCode === 0) {
		let {id, email, login} = response.data.data;
	
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const loginThunk = (email, password, rememberMe) => async dispatch => {
	const response = await authAPI.login(email, password, rememberMe);

	if(response.data.resultCode === 0){
		dispatch(autoLoginThunk());
	} else {
		const messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', {
			_error: messageError,
		}));
	}
};

export const logoutThunk = () => async dispatch => {
	const response = authAPI.logout();

	if(response.data.resultCode === 0){
		dispatch(setAuthUserData(null, null, null, false));
	}
};


export default authReducer;