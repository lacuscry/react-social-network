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


export default authReducer;