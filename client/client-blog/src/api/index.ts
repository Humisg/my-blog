//封装axious
import { GlobalStore } from '@/stores'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

// console.log(import.meta.env,'111111111');

// console.log(import.meta.env.VITE_API, 1111);

const config = {
    // 配置了代理暂时不配置baseURL
    // baseURL: `http://localhost:3000` as string,
    // baseURL: import.meta.env.VITE_API_URL as string,
    timeout: 10000 as number,
    withCredentials: true
}

class RequestHttp {
    service: AxiosInstance
    public constructor(config: AxiosRequestConfig) {
        this.service = axios.create(config)
        // 请求拦截
        this.service.interceptors.request.use(
            (config: AxiosRequestConfig): any => {
                // 请求添加请求头
                const globalStore = GlobalStore()
                const token = globalStore.token
                return {...config, headers: {
                    ...config.headers,
                    'Authorization': `Bearer ${token}`
                }}
            },
            (error: any) => {
                ElMessage.error(error.message)
                return Promise.reject(error)
            }
        )
        // 响应拦截
        this.service.interceptors.response.use(
            (response: any) => {
                return response.data
            },
            (error: any) => {
                ElMessage.error(error.message)
                return Promise.reject(error)
            }
        )
    }

    // 常用方法封装
    public get(url: string, params?: any): Promise<any> {
        return this.service.get(url, { params })
    }
    //post
    public post(url: string, data?: any): Promise<any> {
        return this.service.post(url, data)
    }
    //put
    public put(url: string, data?: any): Promise<any> {
        return this.service.put(url, data)
    }
    //delete
    public delete(url: string, params?: any): Promise<any> {
        return this.service.delete(url, { params })
    }
}

export default new RequestHttp(config)