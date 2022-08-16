import userPhoto from '../assets/images/user.jpg';


const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_SELECTED_PAGE = 'CHANGE-SELECTED-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';


const initialState = {
	users: [],
	showMoreButtonText: 'Show more',
	visibleUsers: 3,
	showMoreCountUsers: 2,
	totalUsers: 5,
	defaultInfo: {
		profilePhoto: userPhoto,
		status: 'Hello',
		location: {
			city: 'Moscow',
			country: 'Russia'
		}
	},
	pageSize: 5,
	totalUsersCount: 0,
	selectedPage: 1,
	isFetching: false
};


function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS: {

			return {
				...state,
				users: action.users
			};
		}

		case SET_TOTAL_USERS_COUNT: {

			return {
				...state,
				totalUsersCount: action.count
			};
		}

		case TOGGLE_FOLLOWING: {

			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: !action.followed
						};
					} else {
						return {
							...user
						};
					}
				}),
			};
		}

		case CHANGE_SELECTED_PAGE: {

			return {
				...state,
				selectedPage: action.selectedPage
			};
		}

		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			};
		}

		default:

			return state;
	}
}


export const toggleFollowing = (status, id) => ({
	type: TOGGLE_FOLLOWING,
	userId: id,
	followed: status
});

export const setUsers = (list) => ({
	type: SET_USERS,
	users: list
});

export const setTotalUsersCount = (count) => ({
	type: SET_TOTAL_USERS_COUNT,
	count
});

export const changeSelectedPage = (page) => ({
	type: CHANGE_SELECTED_PAGE,
	selectedPage: page
});

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
});


export default usersReducer;