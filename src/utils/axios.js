import axios from 'axios'

const instance = axios.create({
	timeout: 5000
})

instance.interceptors.request.use(
	config => {
		// Do something before request is sent
		return config
	},
	error => {
		// Do something with request error
		console.log(error)
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	response => {
		// Do something before response is sent
		if (response.status === 200) {
      return response.data
    } else {
      Promise.reject()
    }
	},
	error => {
		// Do something with response error
    console.log(error)
		return Promise.reject()
	}
)

export default instance
