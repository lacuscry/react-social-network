import {autoLoginThunk} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


const initialState = {
	initialized: false
};


function appReducer(state = initialState, action) {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {

			return {
				...state,
				initialized: true
			};
		}

		
		default:

			return state;
	}
}


export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS
});


export const initializeApp = () => dispatch => {
	const promise = dispatch(autoLoginThunk());
	Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};


export default appReducer;