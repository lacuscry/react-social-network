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
	postFollowUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data);
	},
	deleteFollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	}
};