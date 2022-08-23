import * as axios from 'axios';


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'fed852d8-a0e5-4787-8999-4dc5bbe4b15d'
	}
});


export const userAPI = {
	getUsers(selectedPage = 1, pageSize = 10) {
		return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data);
	},
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	}
};

export const profileAPI = {
	setProfile(userId = 25369) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data);
	},
	getStatus(userId = 25369) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {
				status: status
			})
			.then(response => response.data);
	},
};

export const authAPI = {
	autoLogin() {
		return instance.get(`auth/me`)
			.then(response => response.data);
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {
				email,
				password,
				rememberMe
			})
			.then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`)
			.then(response => response.data);
	}
};