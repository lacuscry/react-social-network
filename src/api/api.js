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
		return instance.get(`users?page=${selectedPage}&count=${pageSize}`);
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`);
	},
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`);
	}
};

export const profileAPI = {
	setProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {
			status: status
		});
	},
	updatePhoto(photo) {
		const formData = new FormData();

		formData.append('image', photo);

		return instance.put(`profile/photo`, formData);
	},
};

export const authAPI = {
	autoLogin() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {
			email,
			password,
			rememberMe
		});
	},
	logout() {
		return instance.delete(`auth/login`);
	}
};