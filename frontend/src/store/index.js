import { createStore } from 'vuex'
import { getAPI } from '../axios.api';
import axios from 'axios';

export default createStore({
	state: {
		name: '',
		accessToken: null,
		refreshToken: null,
		userType: '',
		userTotal: '',
		userData: null
	},
	mutations: {
		updateStorage(state, { access, refresh, name, userdata }){
			state.accessToken = access;
			state.refreshToken = refresh;
			state.name = name;
			state.userData = userdata;
		},
		destroyToken(state){
			state.accessToken = null;
			state.refreshToken = null;
			state.name = '';
		}
	},
	getters:{
		loggedIn(state){
			return state.accessToken != null
		}
	},
	actions: {
		userLogin(context, credentials){
			const userData = {
				'name': credentials.name,
				'password': credentials.password
			}
			return new Promise((resolve, reject) => {
				getAPI.post('/api/token/',
					userData, {
						headers:{
							'Content-Type': 'application/json'
						}
					}
				)
				.then(response => {
					context.commit('updateStorage', {
						access: response.data.access,
						refresh: response.data.refresh,
						name: credentials.name,
					})
					resolve()
				})
				.catch(err => {
					console.error(err);
					reject();
				})
			})
		},
		userLogout(context){
			if(context.getters.loggedIn){
				context.commit('destroyToken')
			}
		},
		// 自定义接口
		usergetData(context, credentials){
			const userData = {
				'name': credentials.name,
				'studyid': credentials.studyid
			}
			return new Promise((resolve, reject) => {
				axios.post('http://www.aifixerpic.icu/hdsmanage/getdataBystuid',
				// axios.post('http://127.0.0.1:1218/getdataBystuid',
				userData, {
						headers:{
							'Content-Type': 'application/json'
						}
					}
				)
				.then(response => {
					console.log("resp::",response)
					if(response.data.success){
						context.commit('updateStorage', {
							access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDMxMzA4LCJqdGkiOiJkMmQzNDY5ZGI4MDY0MjcyOGE4ZGJiYWFkMjMxN2I1MiIsInVzZXJfaWQiOjUwMzJ9.T-RKXpgFzzW48hyp8lI9wou4OSGtMKMbwIiRleqZyLI',
							refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTUxNzQwOCwianRpIjoiNjk5MzA2MDM5NDgyNGNjZTg0OWJhOThiNzA3OWRiMjAiLCJ1c2VyX2lkIjo1MDMyfQ.d60jpQulaVXWvBsCYggBVqwqzbHFJZ8GbBsffUNxhUY',
							name: credentials.name,
							userdata: response.data,
						})
						resolve()
					}
					else{
						reject()
					}
				})
				.catch(err => {
					console.error(err);
					reject();
				})
			})
		},
	},
	modules: {
	}
})
