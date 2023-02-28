import http from '@/api'

export const loginApi = (data: any) => {
    return http.post('/api/login/login', data)
}