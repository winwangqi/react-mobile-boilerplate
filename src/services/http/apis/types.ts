import { AxiosRequestConfig } from 'axios'

export type RequestMethod<T> = (config?: AxiosRequestConfig) => Promise<T>
