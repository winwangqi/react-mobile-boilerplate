import axios from 'axios'
import queryString from 'query-string'

const getRedirectLoginPageUrl = () => {}

const requestInterceptorHandler = config => {
  if (config.data) {
    const configData = {}
    Object.keys(config.data).forEach(key => {
      const val = config.data[key]
      if (typeof val === 'object') {
        try {
          configData[key] = JSON.stringify(val)
        } catch (e) {
          configData[key] = val
        }
      } else {
        configData[key] = val
      }
    })
    config.data = configData
  }

  if (config.method.toUpperCase() === 'POST') {
    config.data = queryString.stringify(config.data)
  }

  return config
}

const responseInterceptorHandler = (response) => {
  return response.data
}

const createAxiosInstance = () => {
  const baseURL = process.env.REACT_APP_API_URL

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })

  axiosInstance.interceptors.request.use(requestInterceptorHandler)
  axiosInstance.interceptors.response.use(responseInterceptorHandler)

  return axiosInstance
}

export const getToken = (data) => createAxiosInstance().post('xxx', data)
