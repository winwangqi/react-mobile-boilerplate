import { NetworkException, ResponseException } from './Exception'
import axios, {
  AxiosInterceptorManager,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { Toast } from 'antd-mobile'
import history from 'router/history'
import paths from 'router/paths'

export interface ResponseBase<T = any> {
  code: number
  data: T
  message: string
}

interface CustomAxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise

  (url: string, config?: AxiosRequestConfig): AxiosPromise

  defaults: AxiosRequestConfig
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }

  getUri(config?: AxiosRequestConfig): string

  request<T = any>(config: AxiosRequestConfig): Promise<T>

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T>

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>

  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T>
}

export const createAxiosInstance = function (): CustomAxiosInstance {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  axiosInstance.interceptors.response.use(
    function (response) {
      const responseCode = {
        success: 0,
        expired: 4,
        notLogin: 5,
      }

      if (response.data.code !== responseCode.success) {
        if (response.data.code !== responseCode.notLogin) {
          if (response.data.code === responseCode.expired) {
            history.push(paths.index)
          }
          Toast.info(response.data.message)
        }
        return Promise.reject(new ResponseException(response.data))
      }
      return response.data
    },
    function (error) {
      Toast.info('服务不可用，请稍后重试')
      return Promise.reject(new NetworkException(error))
    },
  )

  return axiosInstance
}

export default createAxiosInstance()
