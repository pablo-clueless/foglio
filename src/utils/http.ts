import Cookies from "js-cookie"
import axios from "axios"

const createInstance = () => {
	let instance = axios.create()

	instance.interceptors.request.use((config) => {
		const token = Cookies.get("FOGLIO_USER_TOKEN")
		config.headers.Authorization = `Bearer ${token}`
		return config
	})

	return instance
}

export const instance = createInstance()
