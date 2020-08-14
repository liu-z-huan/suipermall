import axios from 'axios'

export function request(config){
	
	//1.创建axios实例
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		tiomeout:5000
	})
	
	//2.axios拦截器
	//2.1请求拦截器得作用
	instance.interceptors.request.use(config => {
		return config
	},err => {
		
	})
	
	//2.2响应拦截器
	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err);
	})
	
	
	//3.发送真正的网络请求
	return instance(config)
		
}