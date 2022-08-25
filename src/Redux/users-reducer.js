import userPhoto from '../assets/images/user.jpg';
import {
	userAPI
} from '../api/api';


const TOOGLE_FOLLOWING_USER = 'TOOGLE-FOLLOWING-USER';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_SELECTED_PAGE = 'CHANGE-SELECTED-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


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
	isFetching: false,
	followingInProgress: null
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

		case TOOGLE_FOLLOWING_USER: {

			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: !action.status
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

		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.id,
			};
		}

		default:

			return state;
	}
}


export const toggleFollowingUser = (id, status) => ({
	type: TOOGLE_FOLLOWING_USER,
	userId: id,
	status
});

export const setUsers = list => ({
	type: SET_USERS,
	users: list
});

export const setTotalUsersCount = count => ({
	type: SET_TOTAL_USERS_COUNT,
	count
});

export const changeSelectedPage = page => ({
	type: CHANGE_SELECTED_PAGE,
	selectedPage: page
});

export const toggleIsFetching = isFetching => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
});

export const toggleIsFollowingProgress = id => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	id
});


export const getUsersThunk = (selectedPage, pageSize) => {
	return dispatch => {
		dispatch(toggleIsFetching(true));

		userAPI.getUsers(selectedPage, pageSize).then(data => {
			dispatch(toggleIsFetching());

			dispatch(setUsers(data.items));

			dispatch(setTotalUsersCount([data.totalCount]));
		});
	};
};

export const changePageThunk = (page, pageSize) => {

	return dispatch => {
		dispatch(changeSelectedPage(page));

		dispatch(toggleIsFetching(true));

		userAPI.getUsers(page, pageSize).then(data => {
			dispatch(toggleIsFetching());

			dispatch(setUsers(data.items));
		});
	};
};

export const changeFollowingStateThunk = (userId, status) => {

	return dispatch => {
		dispatch(toggleIsFollowingProgress(userId));

		if (status) {
			userAPI.unfollowUser(userId).then(data => {
				if (data.resultCode === 0) {
					dispatch(toggleFollowingUser(userId, status));

					dispatch(toggleIsFollowingProgress());
				}
			});
		} else {
			userAPI.followUser(userId).then(data => {
				if (data.resultCode === 0) {
					dispatch(toggleFollowingUser(userId, status));

					dispatch(toggleIsFollowingProgress());
				}
			});
		}
	};
};


export default usersReducer;