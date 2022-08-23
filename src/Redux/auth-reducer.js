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


export const autoLoginThunk = () => dispatch => {
	authAPI.autoLogin().then(data => {
		if(data.resultCode === 0){
			let {id, email, login} = data.data;
		
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
};

export const loginThunk = (formData) => dispatch => {
	authAPI.login(formData).then(data => {
		if(data.resultCode === 0){
			console.log('Logined');
			// autoLoginThunk(data.data)
			// dispatch(setAuthUserData(data.data.userId, formData.login, formData.login, true));
		} else{
			console.log('Error');
		}
	});
};


export default authReducer;